import React, { forwardRef, memo, useMemo } from "react";
import {
  FlexStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";
import Animated from "react-native-reanimated";

import { tokens } from "../constants/tokens";
import { normalize } from "../utils/normalize";

export type TypographyProps = TextProps & {
  children: React.ReactNode;
  textAlign?: TextStyle["textAlign"];
  color?: keyof typeof tokens.colors;
  variant?:
    // SourceSans
    | "sourceBodyRegular14"
    | "sourceBodyMedium16"
    | "sourceEmphasisBold16"
    | "sourceSubtitleMedium20"
    | "sourceHeadlineBold32"
    // Lato
    | "latoBodyRegular14"
    | "latoBodyMedium16"
    | "latoEmphasisBold16"
    | "latoSubtitleMedium20"
    | "latoHeadlineBold32"
    // TikTokSans
    | "tiktokBodyRegular14"
    | "tiktokBodyMedium16"
    | "tiktokEmphasisBold16"
    | "tiktokSubtitleMedium20"
    | "tiktokHeadlineBold32";
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
  gap?: FlexStyle["gap"];
  flex?: FlexStyle["flex"];
};

const TypographyComponent = forwardRef<Text, TypographyProps>(
  (
    {
      children,
      textAlign,
      variant = "sourceBodyMedium16",
      color = "black",
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
        // ----- SourceSans -----
        sourceBodyRegular14: styles.sourceBodyRegular14,
        sourceBodyMedium16: styles.sourceBodyMedium16,
        sourceEmphasisBold16: styles.sourceEmphasisBold16,
        sourceSubtitleMedium20: styles.sourceSubtitleMedium20,
        sourceHeadlineBold32: styles.sourceHeadlineBold32,

        // ----- Lato -----
        latoBodyRegular14: styles.latoBodyRegular14,
        latoBodyMedium16: styles.latoBodyMedium16,
        latoEmphasisBold16: styles.latoEmphasisBold16,
        latoSubtitleMedium20: styles.latoSubtitleMedium20,
        latoHeadlineBold32: styles.latoHeadlineBold32,

        // ----- TikTokSans -----
        tiktokBodyRegular14: styles.tiktokBodyRegular14,
        tiktokBodyMedium16: styles.tiktokBodyMedium16,
        tiktokEmphasisBold16: styles.tiktokEmphasisBold16,
        tiktokSubtitleMedium20: styles.tiktokSubtitleMedium20,
        tiktokHeadlineBold32: styles.tiktokHeadlineBold32,
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
  // ----- SourceSans -----
  sourceBodyRegular14: {
    fontFamily: "SourceSans-Regular",
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  sourceBodyMedium16: {
    fontFamily: "SourceSans-Medium",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  sourceEmphasisBold16: {
    fontFamily: "SourceSans-SemiBold",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  sourceSubtitleMedium20: {
    fontFamily: "SourceSans-Medium",
    fontSize: normalize(20),
    lineHeight: normalize(26),
  },
  sourceHeadlineBold32: {
    fontFamily: "SourceSans-Bold",
    fontSize: normalize(32),
    lineHeight: normalize(40),
  },

  // ----- Lato -----
  latoBodyRegular14: {
    fontFamily: "Lato-Regular",
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  latoBodyMedium16: {
    fontFamily: "Lato-Medium",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  latoEmphasisBold16: {
    fontFamily: "Lato-Bold",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  latoSubtitleMedium20: {
    fontFamily: "Lato-Medium",
    fontSize: normalize(20),
    lineHeight: normalize(26),
  },
  latoHeadlineBold32: {
    fontFamily: "Lato-Bold",
    fontSize: normalize(32),
    lineHeight: normalize(40),
  },

  // ----- TikTokSans -----
  tiktokBodyRegular14: {
    fontFamily: "TikTokSans-Regular",
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  tiktokBodyMedium16: {
    fontFamily: "TikTokSans-Medium",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  tiktokEmphasisBold16: {
    fontFamily: "TikTokSans-SemiBold",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  tiktokSubtitleMedium20: {
    fontFamily: "TikTokSans-Medium",
    fontSize: normalize(20),
    lineHeight: normalize(26),
  },
  tiktokHeadlineBold32: {
    fontFamily: "TikTokSans-Bold",
    fontSize: normalize(32),
    lineHeight: normalize(40),
  },
});

TypographyComponent.displayName = "TypographyComponent";

export const Typography = memo(TypographyComponent);
export const AnimatedTypography = Animated.createAnimatedComponent(Typography);
