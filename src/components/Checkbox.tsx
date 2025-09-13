import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

import { Box } from './Box';
import { Typography } from './Typography';
import { tokens } from '../constants/tokens';

type TCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  shape?: 'circle' | 'square';
};

export const Checkbox = ({
  label,
  checked,
  onChange,
  shape = 'circle', // <-- default to circle
}: TCheckboxProps) => {
  return (
    <Pressable onPress={() => onChange(!checked)}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="subtitleMedium18">{label}</Typography>
        <Box
          justifyContent="center"
          alignItems="center"
          style={{
            width: 24,
            height: 24,
            borderRadius: shape === 'circle' ? tokens.borderRadius.circle : 4,
            backgroundColor: checked
              ? tokens.colors.primary
              : tokens.colors.white,
            borderWidth: tokens.borderWidth.wide,
            borderColor: checked ? tokens.colors.primary : tokens.colors.gray,
          }}
        >
          {checked && (
            <Ionicons
              name="checkmark"
              size={tokens.spacing[16]}
              color={tokens.colors.white}
            />
          )}
        </Box>
      </Box>
    </Pressable>
  );
};
