import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { IMAGE_SIZE } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

import { AmountDisplay } from './AmountDisplay';
import { BankingInfoAndPayment } from './BankingInfoAndPayment';
import { useRecoilValue } from 'recoil';
import { currencyTabState, USD_TAB } from '@/src/constants/recoil/recoilAtom';
import { ArrowUpIcon } from '@/assets/svgs/ArrowUpIcon';

type TUserDetails = {
  walletBalance: string;
};



type BalanceDashboardProps = {
  onBankingInfoPress: () => void;
};

export const BalanceDashboard = ({
  onBankingInfoPress,
}: BalanceDashboardProps) => {

  
  const activeTab = useRecoilValue(currencyTabState);

  const userDetails: TUserDetails = {
    walletBalance: activeTab === USD_TAB ? '$2,800.34' : '₦24,262,450.30',
  };
  // Extract numerical value from balance string (e.g., "$7,022.22" → 7022.22)
  const numericBalance =
    parseFloat(userDetails.walletBalance.replace(/[^0-9.-]+/g, '')) || 0;
  const isZeroBalance = numericBalance === 0;

  const zeroAmount = isZeroBalance
    ? tokens.colors.gray
    : tokens.colors.darkGray;


  return (
    <Box paddingTop={12} paddingX={8}>
      <Typography
        variant="tiktokBodyMedium14"
        color='text'
        style={{
          color: zeroAmount,
        }}
      >
     Portfolio Balance
      </Typography>
      <Box
        paddingTop={8}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <AmountDisplay amount={userDetails.walletBalance} />
      </Box>
<Box flexDirection='row' alignItems='center' >
  <Box flexDirection='row' alignItems='center' >
    <ArrowUpIcon />
    <Typography>2.16%</Typography>
  </Box>
  <Typography>This Month</Typography>
</Box>
    </Box>
  );
};
