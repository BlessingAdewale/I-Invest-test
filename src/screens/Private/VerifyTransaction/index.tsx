import { router } from 'expo-router';
import { Fragment, useState } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { transactionState } from '@/src/constants/recoil/recoilAtom';
import { tokens } from '@/src/constants/tokens';

const CELL_COUNT = 6;

export default function VerifyTransaction() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const transaction = useRecoilValue(transactionState);
  const setTransaction = useSetRecoilState(transactionState);
  const handleContinue = () => {
    const otpVerificationIsSuccessful = value === '123456'; // Simulated OTP

    if (otpVerificationIsSuccessful) {
      if (transaction.transactionInitiated) {
        setTransaction((prev) => ({
          ...prev,
          transactionApproved: true,
        }));
      }
      router.replace('/transaction-initiated');
    } else {
      router.navigate('/home');
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
            Verify Transaction
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
          disabled={value.length !== CELL_COUNT}
          onPress={handleContinue}
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
