import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Avatar } from '@/src/components/Avatar';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import {
  ACTIVE_OPACITY,
  IMAGE_SIZE,
  PADDING_HORIZONTAL,
} from '@/src/constants/globalStyles';

export type TTransaction = {
  id: number;
  first_name: string;
  last_name: string;
  amount: string;
  payment_type: 'credit' | 'debit';
  role: string;
  profile_image?: string;
  date: string;
};

type TTransactionItemProps = {
  item: TTransaction;
  enablePadding?: boolean;
};

export const TransactionItem = ({
  item,
  enablePadding = false,
}: TTransactionItemProps) => {
  const fullName = `${item?.first_name || ''} ${item?.last_name || ''}`;
  const avatarUri = item.profile_image?.trim() || '';
  const paymentSign = item.payment_type === 'credit' ? '+' : '-';

  const viewTransation = () => {
    router.navigate({
      pathname: '/view-transaction',
      params: { id: item.id.toString() },
    });
  };

  const Content = (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={16}
    >
      <Box flexDirection="row" alignItems="center" gap={12}>
        <Avatar uri={avatarUri} size={IMAGE_SIZE - 8} />
        <Box>
          <Typography variant="subtitleMedium18">{fullName}</Typography>
          <Typography variant="bodyRegular14" color="gray">
            {item.role}
          </Typography>
        </Box>
      </Box>
      <Typography variant="emphasisBold18" color="black">
        {paymentSign}₦{item.amount}
      </Typography>
    </Box>
  );

  return (
    <TouchableOpacity
      onPress={viewTransation}
      activeOpacity={ACTIVE_OPACITY}
      style={{
        paddingHorizontal: enablePadding ? PADDING_HORIZONTAL : 0,
      }}
    >
      {Content}
    </TouchableOpacity>
  );
};
