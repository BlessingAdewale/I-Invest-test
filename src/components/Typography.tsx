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
  variant?: // EncodeSansSemiExpanded
  | "EncodeSansSemiExpandedBodyRegular14"
    | "EncodeSansSemiExpandedBodyMedium16"
    | "EncodeSansSemiExpandedEmphasisBold16"
    | "EncodeSansSemiExpandedSubtitleMedium20"
    | "EncodeSansSemiExpandedHeadlineBold32"
    // Lato
    | "latoBodyRegular14"
    | "latoBodyMedium16"
    | "latoEmphasisBold16"
    | "latoSubtitleMedium20"
    | "latoHeadlineBold32"
    | "latoBodyRegular12"
    | "latoHeadlineBold12"

    //SourceSans
    | "sourceSansRegular14"
    | "sourceSansMedium16"
    | "sourceSansSemiBold16"
    | "sourceSansBold20"
    | "sourceSansBold32"
    | "sourceSansBold13"
    // TikTokSans
    | "tiktokHeadlineBold11"
    | "tiktokHeadlineBold19"
    | "tiktokBodyRegular12"
    | "tiktokBodyRegular13"
    | "tiktokBodyRegular14"
    | "tiktokBodyMedium14"
    | "tiktokBodyMedium16"
    | "tiktokEmphasisBold16"
    | "tiktokSubtitleMedium20"
    | "tiktokHeadlineBold32"
    | "tiktokHeadlineBold17"
    | "tiktokHeadlineBold12"
    | "tiktokHeadline700Bold12"
    | "tiktokHeadline500Bold12"
    | "tiktokHeadline600Bold11";
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
      variant = "EncodeSansSemiExpandedBodyMedium16",
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
        // ----- EncodeSansSemiExpanded -----
        EncodeSansSemiExpandedBodyRegular14:
          styles.EncodeSansSemiExpandedBodyRegular14,
        EncodeSansSemiExpandedBodyMedium16:
          styles.EncodeSansSemiExpandedBodyMedium16,
        EncodeSansSemiExpandedEmphasisBold16:
          styles.EncodeSansSemiExpandedEmphasisBold16,
        EncodeSansSemiExpandedSubtitleMedium20:
          styles.EncodeSansSemiExpandedSubtitleMedium20,
        EncodeSansSemiExpandedHeadlineBold32:
          styles.EncodeSansSemiExpandedHeadlineBold32,

        // ----- Lato -----
        latoHeadlineBold12: styles.latoHeadlineBold12,
        latoBodyRegular12: styles.latoBodyRegular12,
        latoBodyRegular14: styles.latoBodyRegular14,
        latoBodyMedium16: styles.latoBodyMedium16,
        latoEmphasisBold16: styles.latoEmphasisBold16,
        latoSubtitleMedium20: styles.latoSubtitleMedium20,
        latoHeadlineBold32: styles.latoHeadlineBold32,

        sourceSansRegular14: styles.sourceSansRegular14,
        sourceSansMedium16: styles.sourceSansMedium16,
        sourceSansSemiBold16: styles.sourceSansSemiBold16,
        sourceSansBold20: styles.sourceSansBold20,
        sourceSansBold32: styles.sourceSansBold32,
        sourceSansBold13: styles.sourceSansBold13,
        // ----- TikTokSans -----
        tiktokHeadlineBold11: styles.tiktokHeadlineBold11,
        tiktokHeadlineBold19: styles.tiktokHeadlineBold19,
        tiktokHeadline600Bold11: styles.tiktokHeadline600Bold11,
        tiktokHeadline500Bold12: styles.tiktokHeadline500Bold12,
        tiktokHeadline700Bold12: styles.tiktokHeadline700Bold12,
        tiktokBodyRegular13: styles.tiktokBodyRegular13,
        tiktokBodyRegular12: styles.tiktokBodyRegular12,
        tiktokBodyRegular14: styles.tiktokBodyRegular14,
        tiktokBodyMedium14: styles.tiktokBodyMedium14,
        tiktokBodyMedium16: styles.tiktokBodyMedium16,
        tiktokEmphasisBold16: styles.tiktokEmphasisBold16,
        tiktokSubtitleMedium20: styles.tiktokSubtitleMedium20,
        tiktokHeadlineBold17: styles.tiktokHeadlineBold17,
        tiktokHeadlineBold12: styles.tiktokHeadlineBold12,
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
  // ----- EncodeSansSemiExpanded -----
  EncodeSansSemiExpandedBodyRegular14: {
    fontWeight: "700",
    fontFamily: "EncodeSansSemiExpanded-Bold",
    fontSize: normalize(14),
    // lineHeight: normalize(20),
  },
  EncodeSansSemiExpandedBodyMedium16: {
    fontFamily: "EncodeSansSemiExpanded-Medium",
    fontWeight: "800",
    fontSize: normalize(20),
    // lineHeight: normalize(22),
  },
  EncodeSansSemiExpandedEmphasisBold16: {
    fontFamily: "EncodeSansSemiExpanded-SemiBold",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  EncodeSansSemiExpandedSubtitleMedium20: {
    fontFamily: "EncodeSansSemiExpanded-Medium",
    fontSize: normalize(20),
    lineHeight: normalize(26),
  },
  EncodeSansSemiExpandedHeadlineBold32: {
    fontFamily: "EncodeSansSemiExpanded-Bold",
    fontSize: normalize(32),
    lineHeight: normalize(40),
  },

  // ----- Lato -----
  latoBodyRegular12: {
    fontFamily: "Lato-Regular",
    fontSize: normalize(12),
    lineHeight: normalize(20),
  },
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
  latoHeadlineBold12: {
    fontFamily: "Lato-Bold",
    fontWeight: "700",
    fontSize: normalize(12),
    // lineHeight: normalize(40),
  },
  // ----- SourceSans -----
  sourceSansRegular14: {
    fontFamily: "SourceSans-Regular",
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  sourceSansMedium16: {
    fontFamily: "SourceSans-Medium",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  sourceSansSemiBold16: {
    fontFamily: "SourceSans-SemiBold",
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  sourceSansBold20: {
    fontFamily: "SourceSans-Bold",
    fontSize: normalize(20),
    lineHeight: normalize(26),
  },
  sourceSansBold32: {
    fontFamily: "SourceSans-Bold",
    fontSize: normalize(32),
    lineHeight: normalize(40),
  },
  sourceSansBold13: {
    fontFamily: "SourceSans-Bold",
    fontSize: normalize(13),
    fontWeight: "700",
    // lineHeight: normalize(40),
  },

  // ----- TikTokSans -----
  tiktokBodyRegular14: {
    fontFamily: "TikTokSans-Regular",
    fontWeight: "700",
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  tiktokBodyRegular13: {
    fontFamily: "TikTokSans-Regular",
    fontWeight: "400",
    fontSize: normalize(13),
    lineHeight: normalize(20),
  },
  tiktokBodyRegular12: {
    fontFamily: "TikTokSans-Regular",
    fontSize: normalize(12),
    lineHeight: normalize(20),
  },
  tiktokBodyMedium14: {
    fontFamily: "TikTokSans-Medium",
    fontSize: normalize(14),
  },
  tiktokBodyMedium16: {
    fontFamily: "TikTokSans-Medium",
    fontWeight: "500",
    fontSize: normalize(13),
    lineHeight: normalize(22),
  },
  tiktokEmphasisBold16: {
    fontFamily: "TikTokSans-SemiBold",
    fontWeight: "600",
    fontSize: normalize(13),
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
  tiktokHeadlineBold17: {
    fontFamily: "TikTokSans-Bold",
    fontWeight: "700",
    fontSize: normalize(17),
  },
  tiktokHeadlineBold11: {
    fontFamily: "TikTokSans-Bold",
    fontWeight: "700",
    fontSize: normalize(11),
  },
  tiktokHeadlineBold19: {
    fontFamily: "TikTokSans-Bold",
    fontWeight: "900",
    fontSize: normalize(14),
  },

  tiktokHeadlineBold12: {
    fontFamily: "TikTokSans-Bold",
    fontWeight: "900",
    fontSize: normalize(12),
  },
  tiktokHeadline700Bold12: {
    fontFamily: "TikTokSans-Bold",
    fontWeight: "700",
    fontSize: normalize(12),
  },
  tiktokHeadline500Bold12: {
    fontFamily: "TikTokSans-Medium",
    fontWeight: "500",
    fontSize: normalize(12),
  },
  tiktokHeadline600Bold11: {
    fontFamily: "TikTokSans-SemiBold",
    fontWeight: "500",
    fontSize: normalize(12),
  },
});

TypographyComponent.displayName = "TypographyComponent";

export const Typography = memo(TypographyComponent);
export const AnimatedTypography = Animated.createAnimatedComponent(Typography);
