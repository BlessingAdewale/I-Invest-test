import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import {
  BottomSheetWrapper,
  BottomSheetWrapperHandle,
} from '@/src/components/BottomSheetWrapper';
import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles, PADDING_HORIZONTAL } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

import { AllTransactionBottomSheet } from './components/AllTransactionBottomSheet';
import { EmptyTransactions } from './components/EmptyTransactions';
import { TwoHeaderListWithFilter } from './components/TwoHeaderListFilter';
import { CREDIT_TAB, DEBIT_TAB } from './constants';
import {
  TransactionItem,
  TTransaction,
} from '../Home/components/TransactionItem';

export default function AllTransactions() {
  const sheetRef = useRef<BottomSheetWrapperHandle>(null);
  const [activeTab, setTab] = useState<typeof DEBIT_TAB | typeof CREDIT_TAB>(
    DEBIT_TAB
  );

  const transactions: TTransaction[] = useMemo(
    () => [
      {
        id: 1,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'debit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '2024-11-01',
      },
      {
        id: 2,
        first_name: 'Joy',
        last_name: 'Ibrahim',
        amount: '180',
        payment_type: 'debit',
        role: 'analyst',
        profile_image: 'https://randomuser.me/api/portraits/women/2.jpg',
        date: '2024-12-15',
      },
      {
        id: 3,
        first_name: 'Zainab',
        last_name: 'Ali',
        amount: '150',
        payment_type: 'debit',
        role: 'developer',
        profile_image: 'https://randomuser.me/api/portraits/women/3.jpg',
        date: '2025-01-10',
      },
      {
        id: 4,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '500',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '2024-10-22',
      },
      {
        id: 5,
        first_name: 'Joy',
        last_name: 'Ibrahim',
        amount: '320',
        payment_type: 'credit',
        role: 'analyst',
        profile_image: 'https://randomuser.me/api/portraits/women/2.jpg',
        date: '2025-01-02',
      },
      {
        id: 6,
        first_name: 'Zainab',
        last_name: 'Ali',
        amount: '290',
        payment_type: 'credit',
        role: 'developer',
        profile_image: 'https://randomuser.me/api/portraits/women/3.jpg',
        date: '2025-02-05',
      },
    ],
    []
  );

  const filterTransactions = useMemo(
    () => transactions.filter((trans) => trans.payment_type === activeTab),
    [transactions, activeTab]
  );

  const handleRequestReport = () => {
    // Add your report request logic here
    console.log('Request report pressed');
  };

  const closeSheet = useCallback(() => {
    sheetRef.current?.dismiss();
  }, []);

  return (
    <SafeScreenView
      edges={['bottom', 'left', 'right']}
      style={globalStyles.wrapper}
    >
      <FlatList
        data={filterTransactions}
        renderItem={({ item }) => <TransactionItem item={item} enablePadding />}
        ListEmptyComponent={() => <EmptyTransactions />}
        ListHeaderComponent={() => (
          <Box
            style={{
              paddingHorizontal: PADDING_HORIZONTAL,
              paddingBottom: tokens.spacing[8],
              paddingTop: tokens.spacing[24],
            }}
          >
            <Typography paddingBottom={8} variant="headingSemiBold24">
              Transactions
            </Typography>
            <Typography
              paddingBottom={20}
              variant="bodyMedium16"
              color="darkGray"
            >
              See all incomes and expenses within your estate
            </Typography>
            <Typography
              onPress={handleRequestReport}
              variant="bodyMedium16"
              color="primary"
            >
              Request report
            </Typography>

            <TwoHeaderListWithFilter
              sheetRef={sheetRef}
              activeTab={activeTab}
              setTab={setTab}
            />
          </Box>
        )}
      />
      <BottomSheetWrapper
        ref={sheetRef}
        enableDynamicSizing={false}
        snapPoints={['85%']}
      >
        <AllTransactionBottomSheet closeSheet={closeSheet} />
      </BottomSheetWrapper>
    </SafeScreenView>
  );
}
