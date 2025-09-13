import { StyleSheet } from 'react-native';

export const NAVIGATION_HEADER_HEIGHT = 100;

export const tokens = {
  colors: {
    // Primary 
textPrimaryLightDark:"#2E3F43",
textSecondaryLightDark:"#000000E5",
textTertiaryLightDark:"#000000CC",
textTertiaryLightDark2:"#00000080",

background: '#F6F6F6',
pinkBackground: '#E8E8FA',
    // black
    globalDark: "#000000",
    globalGray: "#6B7280",

    //
    dashedColor:"#B6C3CA",

//pink
pink: "#9793E8",

//
progressBarColor: "#8263FF",

//Radial Gradient

color1: "#137DFF",
color2:"#D5BEFF",
color3: "#0073FF",


//Blue

blue: "#1868DB",
secondaryBlue:"#0078DB",
lightFairBlue: "#643DFF",
lightFairerBlue:"#E5F1FB",
lightBlue:"#0089CF",
lighterBlue:"#33A1D9",
lighterBlue2:"#8AC9E9",
lightestBlue:"#B0DAF0",
deepBlue:"#006193",
deeperBlue:"#57727E",
yellow: "#FCA700",

textBorder:"#0000001A",
gradientColor:"#FFFFFF80",
gradientColor2:"#8484844D",

//purple
sharpPurple:"#411363",
sharpPurple2:"#431362",
lightPurple: "#AEA6FF",

//text
lightText:"#858F91",
text:"#35454C",
textGray2:"#758183",
textSecondary:"#28353A",
textTetiary:"#1C2F33",
textGray: "#8E8D93",
textBlue: "#57727E",
textBackground:"#E6F3FA",
textBackground2:"#F5F6F6",
textBackground3:"#0000000D",

//red
red:"#EA3336",

//green

green:"#18A540",
stockGreen:"#43F375",
troveUIGreen:"#1CD155",

    // Neutrals
    black: '#121212', // BLACK
    darkGray: '#586474',
    gray: '#445963',
    lightGray: '#EFF2F3',
    deepGray:"#8097A2",


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
