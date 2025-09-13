import React from 'react';
import { Pressable } from 'react-native';

import { Box } from './Box';
import { Typography } from './Typography';

type TSectionHeaderProps = {
  leftTitle?: string;
  rightTitle?: string;
  onPress?: () => void;
};

export const SectionHeader = ({
  leftTitle,
  rightTitle,
  onPress,
}: TSectionHeaderProps) => {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Typography variant="bodyMedium16" color="darkGray">
        {leftTitle}
      </Typography>
      <Pressable onPress={onPress}>
        <Typography variant="bodyMedium16" color="primary">
          {rightTitle}
        </Typography>
      </Pressable>
    </Box>
  );
};
