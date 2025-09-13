import { StyleSheet } from 'react-native';

export const NAVIGATION_HEADER_HEIGHT = 100;

export const tokens = {
  colors: {
    // Primary Blues
    primaryDark: '#0E4690',
    primary: '#1A73E8', // PRIMARY COLOR
    primaryLight: '#D1E3FA',
    primaryLighter: '#E8F1FD',

    // Secondary Yellows
    secondary: '#F9A825', // SECONDARY COLOR
    secondaryDark: '#E48F06',

    // Greens
    green: '#34A853', // SECONDARY GREEN
    greenDark: '#2A8843', // DARKER GREEN

    // red
    red: '#FF4D4F',

    transparent: 'transparent',

    // Neutrals
    black: '#121212', // BLACK
    darkGray: '#586474',
    gray: '#99A4B2',
    lightGray: '#E6E6E6',
    lighterGray: '#F1F1F1',
    extraLightGray: '#FAFAFA',
    white: '#FFFFFF', // WHITE
    modalColor: 'rgba(0,0,0,0.3)',
  },
  spacing: {
    0: 0,
    2: 2,
    4: 4,
    6: 6,
    8: 8,
    10: 10,
    12: 12,
    14: 14,
    16: 16,
    20: 20,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
    80: 80,
  },
  borderRadius: {
    0: 0,
    2: 2,
    4: 4,
    6: 6,
    8: 8,
    12: 12,
    14: 14,
    16: 16,
    20: 20,
    24: 24,
    32: 32,
    full: 999,
    pill: 999,
    circle: 999999,
  },
  zIndex: {
    backdropBelow: -1,
    backdrop: 0,
    backdropAbove: 1,
    popover: 899,
    modal: 999,
    toast: 1099,
  },
  borderWidth: {
    native: StyleSheet.hairlineWidth,
    normal: 1,
    wide: 2,
  },
};

export type TColorKeys = keyof typeof tokens.colors;
