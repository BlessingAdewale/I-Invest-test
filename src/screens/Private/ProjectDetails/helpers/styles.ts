import { StyleSheet } from 'react-native';

import { tokens } from '@/src/constants/tokens';

export const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: tokens.colors.white,
    borderColor: tokens.colors.white,
    borderRadius: tokens.borderRadius[32] * 2,
    borderWidth: tokens.borderWidth.normal,
  },
  activeText: {
    color: tokens.colors.black,
  },
  gridContainer: {
    flexWrap: 'wrap',
  },
  header: {
    borderRadius: tokens.borderRadius[32],
  },
  periodOption: {
    borderColor: tokens.colors.lightGray,
    borderRadius: tokens.borderRadius[32],
    borderWidth: tokens.borderWidth.normal,
    marginBottom: tokens.spacing[12],
    marginRight: tokens.spacing[6],
    paddingHorizontal: tokens.spacing[12],
    paddingVertical: tokens.spacing[10],
  },
  periodText: {
    color: tokens.colors.black,
    textAlign: 'center',
  },
  periodTextSelected: {
    color: tokens.colors.primary,
    fontWeight: '600',
  },
  tab: {
    marginHorizontal: tokens.spacing[10],
    marginVertical: tokens.spacing[10],
  },
  tabTypography: {
    padding: tokens.spacing[12],
  },
});
