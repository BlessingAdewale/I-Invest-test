import { StyleSheet } from 'react-native';

import { tokens } from './tokens';

export const PADDING_HORIZONTAL = 16;

export const ACTIVE_OPACITY = 0.7;

export const IMAGE_SIZE = 56;

export const globalStyles = StyleSheet.create({
  authWrapper: {
    paddingTop: tokens.spacing['32'],
  },
  buttonMarginBottom: {
    marginBottom: 24,
  },

  capitalise: {
    textTransform: 'capitalize',
  },
  columnBetween: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  columnCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnEnd: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  containerScroll: {
    flexGrow: 1,
    // paddingBottom: tokens.spacing['16'],
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  containerView: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  fullFlex: {
    flex: 1,
  },
  rowAround: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  rowBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowEnd: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowStart: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  wrapper: {
    backgroundColor: tokens.colors.white,
    flex: 1,
  },
});
