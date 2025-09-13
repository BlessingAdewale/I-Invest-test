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

type TUserDetails = {
  firstName: string;
  lastName: string;
  address: string;
  role: 'admin' | 'residence';
  status: string;
  houseNumber: string;
  profileImage: string;
  walletBalance: string;
};

const userDetails: TUserDetails = {
  firstName: 'OluwaTobi',
  lastName: 'Ozenoua',
  address: 'Savannah Estate, 3517 W. Gray St. Utica.',
  role: 'residence',
  status: 'Chairman',
  houseNumber: 'House B40',
  profileImage:
    'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
  walletBalance: '$10,000,001,022.22',
};

type BalanceDashboardProps = {
  onBankingInfoPress: () => void;
};

export const BalanceDashboard = ({
  onBankingInfoPress,
}: BalanceDashboardProps) => {
  // Extract numerical value from balance string (e.g., "$7,022.22" → 7022.22)
  const numericBalance =
    parseFloat(userDetails.walletBalance.replace(/[^0-9.-]+/g, '')) || 0;
  const isZeroBalance = numericBalance === 0;

  const zeroAmount = isZeroBalance
    ? tokens.colors.gray
    : tokens.colors.darkGray;

  const handlePress = () => {
    router.navigate('/withdraw-cash');
  };

  return (
    <Box paddingTop={32}>
      <Typography
        variant="bodyMedium16"
        style={{
          color: zeroAmount,
        }}
      >
        Total balance
      </Typography>
      <Box
        paddingTop={8}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <AmountDisplay amount={userDetails.walletBalance} />
        <Pressable onPress={handlePress}>
          <Box
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: isZeroBalance
                ? tokens.colors.gray
                : tokens.colors.primary,
              borderRadius: tokens.borderRadius.circle,
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
            }}
          >
            <AntDesign
              name="arrowdown"
              size={tokens.spacing[24]}
              color={tokens.colors.white}
            />
          </Box>
        </Pressable>
      </Box>
      <BankingInfoAndPayment
        text="Bank account info"
        onPress={onBankingInfoPress}
      />
    </Box>
  );
};
