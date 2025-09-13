import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import {
  forgotPasswordSchema,
  forgotPasswordSchemaType,
} from '@/src/constants/schemas';

export default function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<forgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const onSubmit = (data: forgotPasswordSchemaType) => {
    console.log(data);
    router.replace('/forgot-password-success');
  };

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <KeyboardAwareScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={globalStyles.containerScroll}
      >
        {/* Header */}
        <Fragment>
          <Typography
            variant="headingSemiBold24"
            paddingBottom={8}
            paddingTop={24}
          >
            Reset your account
          </Typography>
          <Typography variant="bodyMedium16" color="darkGray">
            Enter your email to get a reset code
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
                keyboardType="phone-pad"
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
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                label="Re-enter Password"
                placeholder="Re-enter password"
                keyboardType="visible-password"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors?.confirmPassword}
              />
            )}
          />
        </Box>
        <Button title="Complete reset" onPress={handleSubmit(onSubmit)} />
      </KeyboardAwareScrollView>
    </SafeScreenView>
  );
}
