import React from 'react';

import { Box } from '../../../../components/Box';
import { Typography } from '../../../../components/Typography';
import { formatAmountParts } from '../../../../utils/formatAmount';

type TAmountDisplayProps = {
  amount: string;
  zeroColor?: string;
  mainColor?: string;
};

export const AmountDisplay = ({ amount }: TAmountDisplayProps) => {
  const { mainPart, decimalPart } = formatAmountParts(amount);

  return (
    <Box flex={1} flexDirection="row" alignItems="baseline">
      <Typography variant="headlineBold32">{`${mainPart}`}</Typography>
      {decimalPart && (
        <Typography variant="headlineBold20">{`.${decimalPart}`}</Typography>
      )}
    </Box>
  );
};
