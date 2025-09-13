import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { createAccountState } from '@/src/constants/recoil/recoilAtom';
import { bioDataSchema, bioDataSchemaType } from '@/src/constants/schemas';

export default function BioData() {
  const [prevAccountData, setCreateAccountState] =
    useRecoilState(createAccountState);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<bioDataSchemaType>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolver: zodResolver(bioDataSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const navigateSignIn = () => {
    router.dismiss();
    router.navigate('/sign-in');
  };

  const onSubmit = (data: bioDataSchemaType) => {
    setCreateAccountState({
      phoneNumber: prevAccountData?.phoneNumber || '',
      password: prevAccountData?.password || '',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    });
    router.navigate('/pin-confirmation?prevRoute=sign-up');
  };

  return (
    <SafeScreenView
      edges={['bottom', 'left', 'right']}
      style={globalStyles.authWrapper}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={globalStyles.containerScroll}
      >
        {/* Header */}
        <Fragment>
          <Typography variant="headingSemiBold24" paddingBottom={8}>
            Let's know you
          </Typography>
          <Typography variant="bodyMedium16" color="darkGray">
            Create an account, provide your info
          </Typography>
        </Fragment>

        {/* Input fields */}
        <Box paddingTop={32}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  label="First name"
                  wrapperWidth="48%"
                  placeholder="Enter first name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.firstName}
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  label="Last name"
                  placeholder="Enter last name"
                  wrapperWidth="48%"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.lastName}
                  containerStyle={{
                    flexBasis: '100%',
                  }}
                />
              )}
            />
          </Box>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                keyboardType="email-address"
                label="Email"
                placeholder="Email address"
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors?.email}
              />
            )}
          />
        </Box>

        {/* Buttons */}
        <Box paddingTop={12}>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <Button title="Sign up" onPress={handleSubmit(onSubmit)} />
          }
        </Box>
        <Box flex={1} justifyContent="flex-end">
          <Box flexDirection="row" alignItems="center" justifyContent="center">
            <Typography
              color="darkGray"
              variant="bodyRegular14"
              textAlign="center"
              onPress={navigateSignIn}
            >
              Already have an account?
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
