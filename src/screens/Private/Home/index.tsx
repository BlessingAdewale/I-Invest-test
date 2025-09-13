import { useCallback, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';

import {
  BottomSheetWrapper,
  BottomSheetWrapperHandle,
} from '@/src/components/BottomSheetWrapper';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { globalStyles } from '@/src/constants/globalStyles';
import { transactionState } from '@/src/constants/recoil/recoilAtom';
import { AdsBanner } from '@/src/screens/Private/Home/components/AdsBanner';
import { BalanceDashboard } from '@/src/screens/Private/Home/components/BalanceDashboard';
import { HomeHeader } from '@/src/screens/Private/Home/components/HomeHeader';

import { BankingInfoBottomSheet } from './components/BankingInfoBottomSheet';
import { Projects } from './components/Projects';
import TransactionApprovalBanner from './components/TransactionApprovalBanner';
import { TransactionHistory } from './components/TransactionHistory';
import { tokens } from '@/src/constants/tokens';
import { Box } from '@/src/components/Box';
import CurrencySwitcher from './components/CurrencySwitcher';

export default function Home() {
  const transaction = useRecoilValue(transactionState);
  const sheetRef = useRef<BottomSheetWrapperHandle>(null);

  const handleOnBankingInfoPress = useCallback(() => {
    sheetRef.current?.present();
  }, []);

  const handleCloseSheet = useCallback(() => {
    sheetRef.current?.dismiss();
  }, []);

  return (
    <SafeScreenView backgroundColor={tokens.colors.background}  edges={['left', 'right', 'top']}>
      <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={globalStyles.containerScroll}>
        <Box style={{
          backgroundColor: tokens.colors.white,
          borderRadius: tokens.borderRadius[4]
        }} >
        <HomeHeader />
        <CurrencySwitcher />
        <BalanceDashboard onBankingInfoPress={handleOnBankingInfoPress} />
        {transaction?.transactionInitiated && <TransactionApprovalBanner />}
        <AdsBanner />
        <Projects />
        <TransactionHistory />
        </Box>

      </ScrollView>
      <BottomSheetWrapper ref={sheetRef}>
        <BankingInfoBottomSheet closeSheet={handleCloseSheet} />
      </BottomSheetWrapper>
    </SafeScreenView>
  );
}
