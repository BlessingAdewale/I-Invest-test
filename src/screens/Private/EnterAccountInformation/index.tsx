import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';

import {
  BottomSheetWrapper,
  BottomSheetWrapperHandle,
} from '@/src/components/BottomSheetWrapper';
import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { ACTIVE_OPACITY, globalStyles } from '@/src/constants/globalStyles';
import { transactionState } from '@/src/constants/recoil/recoilAtom';
import { tokens } from '@/src/constants/tokens';

import { BankBottomSheet } from './components/BankBottomSheet';

type BankItem = {
  label: string;
  value: string;
  image: string;
};

const bankData: BankItem[] = [
  {
    label: 'Unity Bank',
    value: 'Unity Bank',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6jwvbLhckTrmrmkX3qIZ_8q-YoUz22cubQ&s',
  },
  {
    label: 'Access Bank',
    value: 'Access Bank',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6jwvbLhckTrmrmkX3qIZ_8q-YoUz22cubQ&s',
  },
  {
    label: 'Palmpay',
    value: 'Palmpay',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dcuBlGF43-S2sxFusqq2R9Gtg9CJPOrzRQ&s',
  },
  {
    label: 'ALAT By Wema',
    value: 'ALAT By Wema',
    image:
      'https://i0.wp.com/regtechafrica.com/wp-content/uploads/2021/12/ALAT.jpg?fit=764%2C401&ssl=1',
  },
  {
    label: 'Citi Bank',
    value: 'Citi Bank',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6jwvbLhckTrmrmkX3qIZ_8q-YoUz22cubQ&s',
  },
  {
    label: 'Zenith Bank',
    value: 'Zenith Bank',
    image:
      'https://securedp.zenithbank.com/TokenSelfService/Content/zenith-logo.png',
  },
];

export default function EnterAccountInformation() {
  const [transaction, setTransaction] = useRecoilState(transactionState);
  const { bankAccount, accountHolderName, bank } = transaction;

  const updateField = (field: keyof typeof transaction, value: string) => {
    setTransaction((prev) => ({ ...prev, [field]: value }));
  };

  const sheetRef = useRef<BottomSheetWrapperHandle>(null);

  const isDisabled =
    !bankAccount.trim() ||
    bankAccount.length < 10 ||
    !accountHolderName.trim() ||
    !bank.trim();

  const handleContinue = () => {
    router.navigate('/verify-transaction');
  };

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography variant="headingSemiBold24" paddingTop={24}>
          Enter account information
        </Typography>
        <Typography
          paddingTop={8}
          paddingBottom={40}
          variant="bodyMedium16"
          color="darkGray"
        >
          Provide bank account information
        </Typography>

        <TextInput
          label="Bank account"
          value={bankAccount}
          onChangeText={(text) => {
            const numericText = text.replace(/[^0-9]/g, '').slice(0, 10);
            updateField('bankAccount', numericText);
          }}
          keyboardType="numeric"
        />

        {/* Bank Selector with TouchableOpacity + BottomSheet */}
        <Box>
          <Typography
            variant="bodyRegular14"
            color="darkGray"
            paddingBottom={12}
          >
            Choose bank
          </Typography>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => sheetRef.current?.present()}
            style={[globalStyles.rowBetween, styles.dropdownBox]}
          >
            <Typography variant="bodyRegular16" color={bank ? 'black' : 'gray'}>
              {bank || 'Select Bank'}
            </Typography>
            <Ionicons
              name="chevron-down"
              size={20}
              color={tokens.colors.gray}
            />
          </TouchableOpacity>
        </Box>

        <Box paddingBottom={32} paddingTop={24}>
          <TextInput
            label="Account holder name"
            value={accountHolderName}
            onChangeText={(text) => updateField('accountHolderName', text)}
          />
        </Box>
        <Button
          title="Continue"
          disabled={isDisabled}
          onPress={handleContinue}
        />
      </ScrollView>
      <BottomSheetWrapper ref={sheetRef}>
        <BankBottomSheet
          items={bankData}
          onClose={() => sheetRef.current?.dismiss()}
        />
      </BottomSheetWrapper>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  dropdownBox: {
    borderColor: tokens.colors.lightGray,
    borderRadius: tokens.borderRadius['14'],
    borderWidth: tokens.borderWidth.native,
    height: tokens.spacing[48] + 8,
    paddingHorizontal: tokens.spacing['12'],
  },
});
