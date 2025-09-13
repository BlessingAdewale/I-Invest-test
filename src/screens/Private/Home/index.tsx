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
    <SafeScreenView edges={['left', 'right', 'top']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <HomeHeader />
        <BalanceDashboard onBankingInfoPress={handleOnBankingInfoPress} />
        {transaction?.transactionInitiated && <TransactionApprovalBanner />}
        <AdsBanner />
        <Projects />
        <TransactionHistory />
      </ScrollView>
      <BottomSheetWrapper ref={sheetRef}>
        <BankingInfoBottomSheet closeSheet={handleCloseSheet} />
      </BottomSheetWrapper>
    </SafeScreenView>
  );
}
