import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import {
  createNewEstateSchema,
  createNewEstateSchemaType,
} from '@/src/constants/schemas';
import { tokens } from '@/src/constants/tokens';

import EstateCoverImageSelector from './components/EstateCoverImageSelector';

export default function CreateEstate() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<createNewEstateSchemaType>({
    resolver: zodResolver(createNewEstateSchema),
    defaultValues: {
      estateName: '',
      description: '',
      address: '',
      city: '',
      state: '',
      image: '',
      country: 'Nigeria',
      postalCode: '',
    },
  });

  const onSubmit = (data: createNewEstateSchemaType) => {
    router.replace('/create-estate-success');
    console.log(data);
  };

  const navigateJoinEstate = () => {
    router.replace('/join-estate');
  };

  const onImageSelect = useCallback(
    (image: string) => {
      setValue('image', image);
    },
    [setValue]
  );

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <KeyboardAwareScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={globalStyles.containerScroll}
      >
        {/* Header */}
        <Typography variant="headingSemiBold24" paddingTop={24}>
          Create new estate
        </Typography>

        {/* Input fields */}
        <Box>
          <Box paddingTop={24}>
            <Controller
              control={control}
              name="estateName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  required
                  placeholder="Name"
                  label="Estate name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.estateName}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  multiline
                  required
                  value={value}
                  label="Description"
                  placeholder="Write something about the estate"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.description}
                  containerStyle={{ height: 100 }}
                />
              )}
            />
          </Box>
          <EstateCoverImageSelector
            error={errors?.image?.message}
            onImageSelect={onImageSelect}
          />
          <Box>
            <Controller
              control={control}
              name="address"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  required
                  placeholder="Esate address"
                  label="Address"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.address}
                />
              )}
            />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  required
                  value={value}
                  label="City"
                  placeholder="Ikeja"
                  wrapperWidth="48%"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.city}
                />
              )}
            />
            <Controller
              control={control}
              name="state"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  required
                  label="State"
                  wrapperWidth="48%"
                  placeholder="Lagos"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.state}
                  containerStyle={{
                    flexBasis: '100%',
                  }}
                />
              )}
            />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Controller
              control={control}
              name="country"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  required
                  value={value}
                  editable={false}
                  label="Country"
                  wrapperWidth="48%"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.country}
                />
              )}
            />
            <Controller
              control={control}
              name="postalCode"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  required={false}
                  label="Postal code"
                  placeholder="220756"
                  wrapperWidth="48%"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.postalCode}
                  containerStyle={{
                    flexBasis: '100%',
                  }}
                />
              )}
            />
          </Box>
        </Box>

        {/* Buttons */}
        <Box paddingTop={12}>
          <Button title="Continue" onPress={handleSubmit(onSubmit)} />
          <Button
            title="Join new estate"
            outlined
            onPress={navigateJoinEstate}
            containerStyle={{
              paddingTop: tokens.spacing['12'],
            }}
          />
        </Box>
      </KeyboardAwareScrollView>
    </SafeScreenView>
  );
}
