import { router, useLocalSearchParams } from 'expo-router';
import { Fragment, useState } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Toast from 'react-native-toast-message';
import { useRecoilState } from 'recoil';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import {
  authTokenState,
  createAccountState,
} from '@/src/constants/recoil/recoilAtom';
import { tokens } from '@/src/constants/tokens';
import {
  TCreateAccountValues,
  useCreateAccountMutation,
} from '@/src/react-query/auth/useCreateAccountMutation';
import { saveTokenToUserDevice } from '@/src/utils/getTokenFromUserDevice';

const CELL_COUNT = 6;

export default function PinConfirmation() {
  const params = useLocalSearchParams();
  const [, setAuthTokenState] = useRecoilState(authTokenState);
  const [createAccountPrevData] = useRecoilState(createAccountState);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const { mutate, isPending } = useCreateAccountMutation();

  const handlePinConfirmationSuccess = async (
    token: string,
    isSignUp: boolean
  ) => {
    await saveTokenToUserDevice(token);
    setAuthTokenState(token);
    if (isSignUp) {
      Toast.show({
        type: 'success',
        text1: 'Account created successfully',
      });
      setTimeout(() => {
        if (router.canDismiss()) {
          router.dismissAll();
        }
        router.navigate('/sign-up-success');
      }, 250);
    } else {
      setTimeout(() => {
        if (router.canDismiss()) {
          router.dismissAll();
        }
        router.navigate('/select-estate');
      }, 250);
    }
  };

  const handleContinue = async () => {
    if (params?.prevRoute) {
      if (params.prevRoute === 'sign-in') {
        handlePinConfirmationSuccess('user-auth-token', false);
      } else {
        if (!createAccountPrevData) {
          Toast.show({
            type: 'error',
            text1: 'Missing data',
          });
          if (router.canDismiss()) {
            router.dismissAll();
          }
          router.navigate('/sign-up');
          return;
        }
        const payload: TCreateAccountValues = {
          phone_number: createAccountPrevData.phoneNumber,
          email: createAccountPrevData.email,
          first_name: createAccountPrevData.firstName,
          last_name: createAccountPrevData.lastName,
          password: createAccountPrevData.password,
        };
        mutate(payload, {
          onError: () => {
            handlePinConfirmationSuccess('user-auth-token', true);
          },
        });
      }
    }
  };

  return (
    <SafeScreenView
      edges={['bottom', 'left', 'right']}
      style={globalStyles.authWrapper}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={globalStyles.containerScroll}
      >
        {/* Header */}
        <Fragment>
          <Typography variant="headingSemiBold24" paddingBottom={8}>
            Enter confirmation PIN
          </Typography>
          <Typography variant="bodyMedium16" color="darkGray">
            A PIN was sent to your email kindly enter it to confirm your email
          </Typography>
        </Fragment>

        {/* Input */}
        <Box paddingY={32}>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete={Platform.select({
                android: 'sms-otp',
                default: 'one-time-code',
              })}
              testID="my-code-input"
              renderCell={({ index, symbol, isFocused }) => (
                <Box key={index} justifyContent="center" alignItems="center">
                  <Text
                    style={[styles.cell, isFocused && { borderWidth: 1 }]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </Box>
              )}
            />
          }
        </Box>

        <Button
          title="Continue"
          disabled={value.length !== CELL_COUNT || isPending}
          onPress={handleContinue}
          isLoading={isPending}
        />
      </KeyboardAwareScrollView>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  cell: {
    borderColor: tokens.colors.primary,
    borderRadius: tokens.borderRadius['14'],
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: tokens.spacing['20'],
    textAlign: 'center',
    width: 50,
  },
});
