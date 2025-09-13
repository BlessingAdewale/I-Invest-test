import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { isFirstTimeState } from '@/src/constants/recoil/recoilAtom';
import { signInSchema, signInSchemaType } from '@/src/constants/schemas';
import {
  TSignInValues,
  useSignInMutation,
} from '@/src/react-query/auth/useSignInMutation';

export default function SignIn() {
  const isFirstTime = useRecoilValue(isFirstTimeState);

  const { mutate } = useSignInMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phoneNumber: '09067158741',
      password: 'w2ewrr',
    },
  });

  const navigateForgotPassword = () => {
    router.navigate('/forgot-password');
  };

  const navigatePinConfirmation = () => {
    router.navigate('/pin-confirmation?prevRoute=sign-in');
  };

  const navigateSignUp = () => {
    router.navigate('/sign-up');
  };

  const onSubmit = (data: signInSchemaType) => {
    const payload: TSignInValues = {
      identifier: data.phoneNumber,
      password: data.password,
    };
    mutate(payload, {
      onSuccess: () => {
        navigatePinConfirmation();
      },
    });
  };

  return (
    <SafeScreenView
      edges={isFirstTime ? ['bottom', 'left', 'right'] : undefined}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={globalStyles.containerScroll}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
      >
        {/* Header */}
        <Fragment>
          <Typography
            variant="headingSemiBold24"
            paddingBottom={8}
            paddingTop={24}
          >
            Sign in with your email
          </Typography>
          <Typography variant="bodyMedium16" color="darkGray">
            Enter your email to sign in to parthian
          </Typography>
        </Fragment>

        {/* Input fields */}
        <Box paddingTop={32}>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                label="Phone number"
                placeholder="09067246570"
                keyboardType="number-pad"
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors?.phoneNumber}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                label="Password"
                placeholder="Enter password"
                keyboardType="visible-password"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors?.password}
              />
            )}
          />
        </Box>

        {/* Buttons */}
        <Box paddingTop={12}>
          <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
          <Typography
            color="darkGray"
            variant="bodyRegular14"
            textAlign="center"
            padding={16}
            onPress={navigateForgotPassword}
          >
            Forgotten password?
          </Typography>
        </Box>
        <Box flex={1} justifyContent="flex-end">
          <Box flexDirection="row" alignItems="center" justifyContent="center">
            <Typography
              color="darkGray"
              variant="bodyRegular14"
              textAlign="center"
              onPress={navigateSignUp}
            >
              Don't have an account yet?
            </Typography>
            <Typography
              color="darkGray"
              paddingLeft={4}
              variant="emphasisBold16"
              textAlign="center"
              onPress={navigateSignUp}
            >
              sign up
            </Typography>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </SafeScreenView>
  );
}
