import { StyleSheet } from 'react-native';

import { tokens } from '@/src/constants/tokens';

export const styles = StyleSheet.create({
  pollOption: {
    backgroundColor: tokens.colors.lighterGray,
    borderColor: tokens.colors.transparent,
    borderRadius: tokens.borderRadius[24],
    borderWidth: tokens.borderWidth.normal,
    marginBottom: tokens.spacing[16],
    paddingHorizontal: tokens.spacing[12],
    paddingVertical: tokens.spacing[16],
    width: '48%',
  },
  pollOptionSelected: {
    backgroundColor: tokens.colors.primaryLight,
    borderColor: tokens.colors.primary,
  },
});
