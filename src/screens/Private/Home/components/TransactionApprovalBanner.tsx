import React, { memo } from 'react';

import { Box } from '@/src/components/Box';
import { tokens } from '@/src/constants/tokens';

import {
  TransactionApprovalCard,
  TTransactionApprovalCardProps,
} from './TransactionApprovalCard';

const singleAd: TTransactionApprovalCardProps = {
  title: 'A transaction has been initiated and needs your approval',
  callToAction: 'View transaction',
  backgroundColor: 'secondaryDark',
  totalAdsCount: 1,
  backgroundImage: 'https://example.com/your-background-image.jpg',
};

export const TransactionApprovalBanner = () => {
  return (
    <Box paddingTop={32}>
      <Box
        style={{
          borderRadius: tokens.borderRadius[16],
          overflow: 'hidden',
        }}
      >
        <TransactionApprovalCard
          {...singleAd}
          backgroundColor="secondaryDark"
          totalAdsCount={1}
        />
      </Box>
    </Box>
  );
};

export default memo(TransactionApprovalBanner);
