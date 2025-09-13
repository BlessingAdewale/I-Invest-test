import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCallback, useRef } from 'react';
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

import { WithdrawCashBottomSheet } from './components/WithdrawCashBottomSheet';
import { formatCurrency } from './helper/formatCurrency';
import { getFontSizeForAmount } from './helper/getFontSizeAmount';

export default function WithdrawCash() {
  const [transaction, setTransaction] = useRecoilState(transactionState);

  const { project, description, amount } = transaction;

  const updateField = (field: keyof typeof transaction, value: string) => {
    setTransaction((prev) => ({ ...prev, [field]: value }));
  };

  const sheetRef = useRef<BottomSheetWrapperHandle>(null);
  type TProjectData = {
    label: string;
    value: string;
  };

  const handleCloseBottomSheet = useCallback(
    () => sheetRef.current?.dismiss(),
    []
  );

  const ProjectData: TProjectData[] = [
    { label: 'Project Security Camera', value: 'security camera' },
    { label: 'Project 24 hours light', value: '24 hours light' },
  ];

  const rawAmount = amount.replace(/[^0-9.]/g, '').trim();

  const isDisabled =
    !rawAmount ||
    Number(rawAmount) === 0 ||
    rawAmount.length > 14 ||
    !description.trim() ||
    !project.trim();
  const handleContinue = () => {
    router.navigate('/enter-account-information');
  };

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography variant="headingSemiBold24" paddingTop={24}>
          Withdraw cash
        </Typography>
        <Typography
          paddingTop={8}
          paddingBottom={40}
          variant="bodyMedium16"
          color="darkGray"
        >
          How much do you want to withdraw
        </Typography>

        {/* Amount Input */}
        <Box flexDirection="row" marginBottom={24}>
          <Typography variant="bodyMedium56" paddingRight={8}>
            ₦
          </Typography>
          <Box flex={1}>
            <TextInput
              value={amount}
              onChangeText={(text) => {
                const cleaned = text.replace(/[^\d.]/g, '');

                if (cleaned === '') {
                  updateField('amount', '');
                  return;
                }

                const [intPart, decPart] = cleaned.split('.');
                const limitedInt = intPart.slice(0, 16);
                const limitedCleaned = decPart
                  ? `${limitedInt}.${decPart}`
                  : limitedInt;

                const formatted = formatCurrency(limitedCleaned);
                updateField('amount', formatted);
              }}
              placeholder="0"
              disableBorder
              placeholderTextColor={tokens.colors.gray}
              height={tokens.spacing[64] + 3}
              keyboardType="numeric"
              containerStyle={{ paddingHorizontal: 0 }}
              style={{
                fontFamily: 'InterTight-Medium',
                fontSize: getFontSizeForAmount(amount),
                lineHeight: getFontSizeForAmount(amount) + 8,
                color: tokens.colors.black,
              }}
            />
          </Box>
        </Box>

        {/* Project Selector */}
        <Box>
          <Typography
            variant="bodyRegular14"
            color="darkGray"
            paddingBottom={12}
          >
            Funds from which project?
          </Typography>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => sheetRef.current?.present()}
            style={[globalStyles.rowBetween, styles.dropdownBox]}
          >
            <Typography
              variant="bodyRegular14"
              color={project ? 'black' : 'gray'}
            >
              {ProjectData.find((p) => p.value === project)?.label ||
                'Select Project'}
            </Typography>
            <Ionicons
              name="chevron-down"
              size={20}
              color={tokens.colors.gray}
            />
          </TouchableOpacity>
        </Box>

        {/* Description Input */}
        <Box paddingTop={24} paddingBottom={32}>
          <Typography
            variant="bodyRegular14"
            color="darkGray"
            paddingBottom={12}
          >
            Description
          </Typography>
          <TextInput
            value={description}
            onChangeText={(text) => updateField('description', text)}
            height={tokens.spacing[80] + 20}
            multiline
            textAlignVertical="top"
            style={{
              paddingVertical: tokens.spacing[14],
            }}
          />
        </Box>

        <Button
          title="Continue"
          disabled={isDisabled}
          onPress={handleContinue}
        />
      </ScrollView>
      <BottomSheetWrapper ref={sheetRef}>
        <WithdrawCashBottomSheet
          items={ProjectData}
          onClose={handleCloseBottomSheet}
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
