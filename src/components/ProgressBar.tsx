import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { Box } from './Box';
import { tokens } from '../constants/tokens';

type TProgressBarProps = {
  progress: number; // from 0 to 1
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  duration?: number;
};

const ProgressBar = ({
  progress,
  height = 8,
  backgroundColor = tokens.colors.primaryLighter,
  progressColor = tokens.colors.primary,
  duration = 300,
}: TProgressBarProps) => {
  const progressValue = useSharedValue(0);

  useEffect(() => {
    progressValue.value = withTiming(progress, { duration });
  }, [progress, progressValue, duration]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progressValue.value * 100}%`,
    };
  });

  return (
    <Box style={[styles.container, { height, backgroundColor }]}>
      <Animated.View
        style={[
          styles.bar,
          {
            height,
            backgroundColor: progressColor,
          },
          animatedStyle,
        ]}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  bar: {
    borderRadius: tokens.borderRadius.full,
  },
  container: {
    borderRadius: tokens.borderRadius.full,
    width: '100%',
  },
});

export default ProgressBar;
