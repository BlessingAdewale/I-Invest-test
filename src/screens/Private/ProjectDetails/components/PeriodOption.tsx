import React from 'react';
import { Pressable } from 'react-native';

import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

import { styles } from '../helpers/styles';

type TPeriodOptionProps = {
  period: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
};

export const PeriodOption = ({
  period,
  isSelected,
  onSelect,
}: TPeriodOptionProps) => {
  return (
    <Pressable
      onPress={() => onSelect(period)}
      style={[
        styles.periodOption,
        {
          backgroundColor: isSelected
            ? tokens.colors.black
            : tokens.colors.white,
          borderWidth: isSelected ? 0 : 1,
        },
      ]}
    >
      <Typography variant="bodyMedium14" color={isSelected ? 'white' : 'black'}>
        {period}
      </Typography>
    </Pressable>
  );
};
