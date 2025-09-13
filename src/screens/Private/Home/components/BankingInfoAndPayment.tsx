import React from 'react';
import { Pressable, PressableProps } from 'react-native';

import { ArrowRightIcon, BankIcon } from '@/assets/svgs';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type TBankingInfoAndPaymentProps = {
  text: string;
  onPress: () => void;
  iconLeft?: React.ReactNode; 
} & PressableProps;

export const BankingInfoAndPayment = ({
  text,
  onPress,
  iconLeft,
  ...props
}: TBankingInfoAndPaymentProps) => {
  return (
    <Box marginTop={10}>
      <Pressable
        onPress={() => onPress && onPress()}
        {...props}
        style={{
          backgroundColor: tokens.colors.lightGray,
          borderRadius: tokens.borderRadius[24],
          alignSelf: 'flex-start',
        }}
      >
        <Box flexDirection="row" alignItems="center" padding={8}>
        {iconLeft ?? <BankIcon />}
          <Typography
            variant="bodyMedium14"
            paddingLeft={8}
            paddingRight={8}
            style={{ color: tokens.colors.black, flexShrink: 1 }}
          >
            {text}
          </Typography>
          <ArrowRightIcon />
        </Box>
      </Pressable>
    </Box>
  );
};
