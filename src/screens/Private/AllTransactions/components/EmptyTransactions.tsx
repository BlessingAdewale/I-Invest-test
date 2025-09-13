import React from 'react';

import { EmptyTransactionIcon } from '@/assets/svgs/EmptyTransactionIcon';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';

export const EmptyTransactions = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" paddingTop={80}>
      <EmptyTransactionIcon />
      <Typography
        numberOfLines={2}
        ellipsizeMode="tail"
        variant="headlineBold20"
        paddingTop={40}
        color="black"
      >
        No transactions have been made yet
      </Typography>
    </Box>
  );
};
