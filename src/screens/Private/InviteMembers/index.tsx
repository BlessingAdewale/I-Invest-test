import { ScrollView, useWindowDimensions } from 'react-native';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { TextInput } from '@/src/components/TextInput';
import { Box } from '@/src/components/Box';
import { Controller, useForm } from 'react-hook-form';
import { signInSchema, signInSchemaType } from '@/src/constants/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/src/components/Button';
import CopyText from '@/src/components/CopyText';
import { tokens } from '@/src/constants/tokens';
import { Image } from 'expo-image';

export default function InviteMembers() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phoneNumber: '',
    },
  });

  const onSubmit = (data: signInSchemaType) => {
    console.log('Inviting with:', data);
    // invite api mutation here
  };

  const { width } = useWindowDimensions();
  const qrSize = width * 0.35; // Example: 35% of screen width
  return (
    <SafeScreenView edges={['bottom', 'right', 'left']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography paddingTop={32} variant="headingSemiBold24">
          Invite new members
        </Typography>

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
        </Box>

        <Button
          title="Send invite"
          style={{ backgroundColor: 'black' }}
          onPress={handleSubmit(onSubmit)}
        />

        <Box
          marginY={24}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
          padding={16}
          style={{
            height: 190,
            backgroundColor: tokens.colors.primary,
            borderRadius: tokens.borderRadius[24],
          }}
        >
          {/* Logo circle */}
          <Box
            padding={16}
            justifyContent="center"
            alignItems="center"
            style={{
              backgroundColor: tokens.colors.primaryLighter,
              borderRadius: tokens.borderRadius.circle,
              width: 64,
              height: 64,
            }}
          >
            <Typography color="black" variant="bodyMedium16">
              HW
            </Typography>
          </Box>

          {/* QR / Barcode */}
          <Box
            padding={6}
            style={{
              backgroundColor: tokens.colors.white,
              borderRadius: tokens.borderRadius[24],
              borderWidth: 1,
              borderColor: tokens.colors.lightGray,
            }}
          >
            <Image
              source={require('../../../../assets/images/QRCode.png')}
              style={{ width: qrSize, height: qrSize - 4 }}
              contentFit="contain"
            />
          </Box>
        </Box>

        <Typography paddingTop={32}>Estate code</Typography>

        <Box
          flexDirection="row"
          paddingTop={32}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="headingSemiBold24">GSGISRHEJIE</Typography>
          <CopyText textToCopy="GSGISRHEJIE" />
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}
