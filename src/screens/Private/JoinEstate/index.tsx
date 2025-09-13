import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { AddNewEstateButton } from '@/src/components/AddNewEstateButton';
import {
  BottomSheetWrapper,
  BottomSheetWrapperHandle,
} from '@/src/components/BottomSheetWrapper';
import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import {
  estateCodeSchema,
  estateCodeSchemaType,
} from '@/src/constants/schemas';

import { JoinEstateBottomSheet } from './components/JoinEstateBottomSheet';

export default function JoinEstate() {
  const sheetRef = useRef<BottomSheetWrapperHandle>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<estateCodeSchemaType>({
    resolver: zodResolver(estateCodeSchema),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = (data: estateCodeSchemaType) => {
    console.log(data);
    sheetRef.current?.present();
  };

  const navigateToEstateCreation = () => {
    router.replace('/create-estate');
  };

  return (
    <SafeScreenView edges={['bottom', 'bottom', 'right']}>
      <KeyboardAwareScrollView
        contentContainerStyle={globalStyles.containerScroll}
      >
        {/* Header */}
        <Box paddingTop={24}>
          <Typography variant="headingSemiBold24" paddingBottom={8}>
            Enter estate code
          </Typography>
          <Typography variant="bodyMedium16" color="darkGray">
            Get code from tour estate manager to join the estate.
          </Typography>
        </Box>

        {/* Input fields */}
        <Box paddingTop={24}>
          <Controller
            control={control}
            name="code"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                autoFocus
                value={value}
                keyboardType="email-address"
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors?.code}
                style={styles.input}
              />
            )}
          />
        </Box>
        <Button title="Continue" onPress={handleSubmit(onSubmit)} />
      </KeyboardAwareScrollView>
      <AddNewEstateButton onPress={navigateToEstateCreation} />
      <BottomSheetWrapper
        ref={sheetRef}
        backdropPressBehavior="none"
        enablePanDownToClose={false}
      >
        <JoinEstateBottomSheet
          closeSheet={() => {
            sheetRef.current?.dismiss();
          }}
        />
      </BottomSheetWrapper>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 32,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
