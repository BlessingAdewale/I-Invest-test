import React, { useCallback, useRef } from 'react';
import { FlatList } from 'react-native';

import {
  BottomSheetWrapper,
  BottomSheetWrapperHandle,
} from '@/src/components/BottomSheetWrapper';
import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';

import { HeaderListWithFilter } from './components/HeaderListWithFilter';
import { TransactionBottomSheet } from './components/TransactionBottomSheet';
import {
  TransactionItem,
  TTransaction,
} from '../Home/components/TransactionItem';

type TData = {
  title: string;
  description: string;
  amount_that_has_been_contributed: string;
  amount_to_contribute: string;
  transaction: TTransaction[];
  project_paused: boolean;
};

export default function ViewProjectTransaction() {
  const sheetRef = useRef<BottomSheetWrapperHandle>(null);

  const data: TData = {
    title: 'Security upgrade',
    description:
      'Improve security infrastructure, install cameras, gates, and lights.',
    amount_that_has_been_contributed: '$1690',
    amount_to_contribute: '$6,550',
    transaction: [
      {
        id: 1,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 2,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 3,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 4,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 5,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 6,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
    ],
    project_paused: false,
  };

  const handleRequestReport = useCallback(() => {
    console.log('Request report pressed');
  }, []);

  const handleCloseSheet = useCallback(() => {
    sheetRef.current?.dismiss();
  }, []);

  return (
    <SafeScreenView
      edges={['bottom', 'left', 'right']}
      style={globalStyles.wrapper}
    >
      <FlatList
        data={data.transaction}
        renderItem={({ item }) => <TransactionItem item={item} enablePadding />}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <Box paddingTop={24} paddingBottom={8} paddingX={16}>
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
            <HeaderListWithFilter sheetRef={sheetRef} />
          </Box>
        }
      />

      <BottomSheetWrapper ref={sheetRef}>
        <TransactionBottomSheet
          closeSheet={handleCloseSheet}
          projectTitle={data.title}
        />
      </BottomSheetWrapper>
    </SafeScreenView>
  );
}
