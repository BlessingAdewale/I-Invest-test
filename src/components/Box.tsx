import React, { forwardRef, memo, useMemo } from 'react';
import {
  FlexStyle,
  StyleProp,
  View,
  type ViewProps,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';

import { tokens } from '../constants/tokens';

export type BoxProps = ViewProps & {
  children?: React.ReactNode;
  backgroundColor?: keyof typeof tokens.colors;
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
  columnGap?: FlexStyle['columnGap'];
  rowGap?: FlexStyle['rowGap'];
  flex?: FlexStyle['flex'];
  flexBasis?: FlexStyle['flexBasis'];
  flexShrink?: FlexStyle['flexShrink'];
  flexWrap?: FlexStyle['flexWrap'];
  flexDirection?: FlexStyle['flexDirection'];
  alignItems?: FlexStyle['alignItems'];
  alignSelf?: FlexStyle['alignSelf'];
  alignContent?: FlexStyle['alignContent'];
  justifyContent?: FlexStyle['justifyContent'];
  height?: FlexStyle['height'];
  width?: FlexStyle['width'];
  borderRadius?: keyof typeof tokens.borderRadius;
  borderColor?: keyof typeof tokens.colors;
  borderWidth?: keyof typeof tokens.borderWidth;
};

const BoxComponent = forwardRef<View, BoxProps>(
  (
    {
      children,
      backgroundColor = 'transparent',
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
      height,
      width,
      marginY,
      gap,
      flex,
      flexBasis,
      flexWrap,
      flexDirection,
      alignContent,
      alignItems,
      flexShrink,
      alignSelf,
      justifyContent,
      borderRadius,
      borderWidth,
      borderColor,
      style,
      ...rest
    },
    ref
  ) => {
    const styleObject: StyleProp<ViewStyle> = useMemo(
      () => ({
backgroundColor,
borderColor,
        padding,
        paddingHorizontal: paddingX,
        paddingVertical: paddingY,
        paddingTop,
        paddingLeft,
        paddingBottom,
        paddingRight,
        margin,
        height,
        width,
        marginHorizontal: marginX,
        marginVertical: marginY,
        marginTop,
        marginLeft,
        marginBottom,
        marginRight,

        gap,
        flex,
        flexBasis,
        flexShrink,
        flexDirection,
        flexWrap,
        alignContent,

        alignItems,
        alignSelf,
        borderRadius: borderRadius
          ? tokens.borderRadius[borderRadius]
          : undefined,
        justifyContent,
      }),
      [
        borderColor,
        backgroundColor,
        borderWidth,
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingLeft,
        paddingBottom,
        paddingRight,
        margin,
        marginX,
        marginY,
        marginTop,
        marginLeft,
        marginBottom,
        marginRight,
        gap,
        height,
        width,
        flex,
        flexShrink,
        flexBasis,
        flexDirection,
        flexWrap,
        alignContent,
        alignItems,
        alignSelf,
        borderRadius,
        justifyContent,
      ]
    );

    return (
      <View ref={ref} style={[styleObject, style]} {...rest}>
        {children}
      </View>
    );
  }
);

export const Box = memo(BoxComponent);

BoxComponent.displayName = 'BoxComponent';

export const AnimatedBox = Animated.createAnimatedComponent(Box);
