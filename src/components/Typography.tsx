import React, { forwardRef, memo, useMemo } from 'react';
import {
  FlexStyle,
  StyleProp,
  StyleSheet,
  Text,
  type TextProps,
  TextStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';

import { tokens } from '../constants/tokens';

export type TypographyProps = TextProps & {
  children: React.ReactNode;
  textAlign?: TextStyle['textAlign'];
  color?: keyof typeof tokens.colors;
  variant?:
    | 'headlineBold64'
    | 'headlineBold48'
    | 'headlineBold32'
    | 'headingSemiBold24'
    | 'headlineBold20'
    | 'subtitleMedium56'
    | 'subtitleMedium18'
    | 'subtitleMedium20'
    | 'emphasisBold18'
    | 'emphasisBold16'
    | 'bodyMedium56'
    | 'emphasisBold14'
    | 'bodyMedium16'
    | 'bodyMedium14'
    | 'bodyRegular14'
    | 'bodyRegular12'
    | 'bodyRegular16'
    | 'bodyRegular18';
  padding?: keyof typeof tokens.spacing;
  paddingX?: keyof typeof tokens.spacing;
  paddingY?: keyof typeof tokens.spacing;
  paddingTop?: keyof typeof tokens.spacing;
  paddingLeft?: keyof typeof tokens.spacing;
  paddingBottom?: keyof typeof tokens.spacing;
  paddingRight?: keyof typeof tokens.spacing;
  margin?: keyof typeof tokens.spacing;
  marginX?: keyof typeof tokens.spacing;
  marginY?: keyof typeof tokens.spacing;
  marginTop?: keyof typeof tokens.spacing;
  marginLeft?: keyof typeof tokens.spacing;
  marginBottom?: keyof typeof tokens.spacing;
  marginRight?: keyof typeof tokens.spacing;
  gap?: FlexStyle['gap'];
  flex?: FlexStyle['flex'];
};

const TypographyComponent = forwardRef<Text, TypographyProps>(
  (
    {
      children,
      textAlign,
      variant = 'bodyMedium16',
      color = 'black',
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX,
      paddingY,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX,
      marginY,
      gap,
      flex,
      style,
      ...rest
    },
    ref
  ) => {
    const variantStyle = useMemo(() => {
      return {
        headlineBold64: styles.headlineBold64,
        headlineBold48: styles.headlineBold48,
        headlineBold32: styles.headlineBold32,
        headingSemiBold24: styles.headingSemiBold24,
        headlineBold20: styles.headlineBold20,
        subtitleMedium56: styles.subtitleMedium56,
        subtitleMedium18: styles.subtitleMedium18,
        subtitleMedium20: styles.subtitleMedium20,
        emphasisBold18: styles.emphasisBold18,
        emphasisBold16: styles.emphasisBold16,
        bodyMedium56: styles.bodyMedium56,
        bodyRegular18: styles.bodyRegular18,
        emphasisBold14: styles.emphasisBold14,
        bodyRegular14: styles.bodyRegular14,
        bodyRegular12: styles.bodyRegular12,
        bodyRegular16: styles.bodyRegular16,
        bodyMedium16: styles.bodyMedium16,
        bodyMedium14: styles.bodyMedium14,
      }[variant];
    }, [variant]);

    const styleObject: StyleProp<TextStyle> = useMemo(
      () => ({
        textAlign,
        color: tokens.colors[color],
        padding,
        paddingHorizontal: paddingX,
        paddingVertical: paddingY,
        paddingTop,
        paddingLeft,
        paddingBottom,
        paddingRight,
        margin,
        marginHorizontal: marginX,
        marginVertical: marginY,
        marginTop,
        marginLeft,
        marginBottom,
        marginRight,
        gap,
        flex,
      }),
      [
        color,
        flex,
        gap,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginX,
        marginY,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingX,
        paddingY,
        textAlign,
      ]
    );

    return (
      <Text ref={ref} style={[styleObject, variantStyle, style]} {...rest}>
        {children}
      </Text>
    );
  }
);

const styles = StyleSheet.create({
  bodyMedium14: {
    fontFamily: 'InterTight-Medium', // Weight 500
    fontSize: 14,
    lineHeight: 20,
  },
  bodyMedium16: {
    fontFamily: 'InterTight-Medium', // Weight 500
    fontSize: 16,
    lineHeight: 20,
  },
  bodyMedium56: {
    fontFamily: 'InterTight-Medium', // Weight 500
    fontSize: 56,
    lineHeight: 67,
  },
  bodyRegular12: {
    fontFamily: 'InterTight-Regular', // Weight 400
    fontSize: 12,
    lineHeight: 17,
  },
  bodyRegular14: {
    fontFamily: 'InterTight-Regular', // Weight 400
    fontSize: 14,
    lineHeight: 17,
  },
  bodyRegular16: {
    fontFamily: 'InterTight-Regular', // Weight 400
    fontSize: 16,
    lineHeight: 20,
  },
  bodyRegular18: {
    fontFamily: 'InterTight-Regular', // Weight 400
    fontSize: 18,
    lineHeight: 20,
  },
  emphasisBold14: {
    fontFamily: 'InterTight-Semibold', // Weight 600
    fontSize: 14,
    lineHeight: 17,
  },
  emphasisBold16: {
    fontFamily: 'InterTight-Semibold', // Weight 600
    fontSize: 16,
    lineHeight: 20,
  },
  emphasisBold18: {
    fontFamily: 'InterTight-Semibold', // Weight 600
    fontSize: 18,
    lineHeight: 25,
  },
  headingSemiBold24: {
    fontFamily: 'InterTight-Semibold', // Corresponds to weight 600
    fontSize: 24,
    lineHeight: 30,
  },
  headlineBold20: {
    fontFamily: 'InterTight-Semibold', // Weight 600
    fontSize: 20,
    lineHeight: 24,
  },
  headlineBold32: {
    fontFamily: 'InterTight-Semibold', // Weight 600
    fontSize: 32,
    lineHeight: 40,
  },
  headlineBold48: {
    fontFamily: 'InterTight-Semibold', // Weight 600
    fontSize: 48,
    lineHeight: 60,
  },
  headlineBold64: {
    fontFamily: 'InterTight-Semibold', // Weight 600
    fontSize: 64,
    lineHeight: 90,
  },
  subtitleMedium18: {
    fontFamily: 'InterTight-Medium', // Weight 500
    fontSize: 18,
    lineHeight: 22,
  },
  subtitleMedium20: {
    fontFamily: 'InterTight-Medium', // Weight 500
    fontSize: 20,
    lineHeight: 24,
  },
  subtitleMedium56: {
    fontFamily: 'InterTight-Medium', // Weight 500
    fontSize: 56,
    lineHeight: 67,
  },
});

TypographyComponent.displayName = 'TypographyComponent';

export const Typography = memo(TypographyComponent);

export const AnimatedTypography = Animated.createAnimatedComponent(Typography);
