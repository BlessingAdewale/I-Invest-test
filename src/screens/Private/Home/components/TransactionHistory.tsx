import { router } from 'expo-router';
import React from 'react';

import { Box } from '@/src/components/Box';
import { SectionHeader } from '@/src/components/SectionHeader';

import { TTransaction } from './TransactionItem';
import { Transactions } from './Transactions';

export const TransactionHistory = () => {
  const data: TTransaction[] = [
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
      payment_type: 'debit',
      role: 'manager',
      profile_image: 'https://randomuser.me/api/portraits/women/2.jpg',
      date: '12-01-2024',
    },
    {
      id: 3,
      first_name: 'Blessing',
      last_name: 'Adeleke',
      amount: '290',
      payment_type: 'credit',
      role: 'manager',
      profile_image: 'https://randomuser.me/api/portraits/women/3.jpg',
      date: '12-01-2024',
    },
  ];
  const handlePress = () => {
    router.navigate('/all-transactions');
  };

  if (!data) {
    return null;
  }

  return (
    <Box paddingTop={32}>
      <SectionHeader
        leftTitle="Transactions"
        rightTitle="See all"
        onPress={handlePress}
      />
      <Transactions data={data} />
    </Box>
  );
};
