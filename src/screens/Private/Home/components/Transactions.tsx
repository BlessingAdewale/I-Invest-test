import React from 'react';

import { Box } from '@/src/components/Box';

import { TransactionItem, TTransaction } from './TransactionItem';

type TTransactions = {
  data: TTransaction[];
};

export const Transactions = ({ data }: TTransactions) => {
  return (
    <Box paddingTop={16}>
      {data.map((item) => {
        return <TransactionItem key={item.id} item={item} />;
      })}
    </Box>
  );
};
