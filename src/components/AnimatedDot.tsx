import { memo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { AnimatedBox } from './Box';
import { tokens } from '../constants/tokens';

export const AnimatedDot = memo(
  ({ offsetX, index }: { offsetX: SharedValue<number>; index: number }) => {
    const { width } = useWindowDimensions();

    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
      ];
      return {
        backgroundColor: interpolateColor(offsetX.value, inputRange, [
          tokens.colors.lightGray,
          tokens.colors.black,
          tokens.colors.lightGray,
        ]),
      };
    });

    return (
      <AnimatedBox
        marginLeft={index === 0 ? 4 : 0}
        marginRight={4}
        style={[styles.dot, animatedStyle]}
      />
    );
  }
);

const styles = StyleSheet.create({
  dot: {
    backgroundColor: tokens.colors.black,
    borderRadius: tokens.borderRadius['12'],
    height: 10,
    width: 10,
  },
});

AnimatedDot.displayName = 'AnimatedDot';
