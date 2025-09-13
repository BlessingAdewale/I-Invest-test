import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { createAccountState } from '@/src/constants/recoil/recoilAtom';
import { signInSchema, signInSchemaType } from '@/src/constants/schemas';

export default function SignUp() {
  const setCreateAccountState = useSetRecoilState(createAccountState);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const navigateSignIn = () => {
    router.navigate('/sign-in');
  };

  const onSubmit = (data: signInSchemaType) => {
    setCreateAccountState({
      ...data,
      firstName: '',
      lastName: '',
    });
    router.navigate('/bio-data');
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
            Sign up with your email
          </Typography>
          <Typography variant="bodyMedium16" color="darkGray">
            Enter your email to sign up to parthian
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
                placeholder="9066458741"
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
          <Button title="Sign up" onPress={handleSubmit(onSubmit)} />
        </Box>
        <Box flex={1} justifyContent="flex-end">
          <Box flexDirection="row" alignItems="center" justifyContent="center">
            <Typography
              color="darkGray"
              variant="bodyRegular14"
              textAlign="center"
              onPress={navigateSignIn}
            >
              You already have an account?
            </Typography>
            <Typography
              color="darkGray"
              paddingLeft={4}
              variant="emphasisBold16"
              textAlign="center"
              onPress={navigateSignIn}
            >
              sign in
            </Typography>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </SafeScreenView>
  );
}
