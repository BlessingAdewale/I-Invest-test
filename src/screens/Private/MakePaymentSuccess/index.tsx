import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

export default function MakePaymentSuccess() {
  const confettiRef = useRef<LottieView>(null);
  const emojiScale = useSharedValue(1);

  useEffect(() => {
    // Animate emoji bounce
    emojiScale.value = withSequence(
      withTiming(1.4, { duration: 500 }),
      withSpring(1)
    );
  }, [emojiScale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: emojiScale.value }],
  }));

  const handleViewProject = useCallback(
    () => router.replace('/view-project'),
    []
  );

  const handleProject = useCallback(() => router.navigate('/project'), []);

  return (
    <SafeScreenView>
      <ScrollView
        contentContainerStyle={[
          globalStyles.containerScroll,
          styles.scrollContent,
        ]}
      >
        {/* Confetti Animation */}
        <LottieView
          ref={confettiRef}
          source={require('@/assets/lotties/confetti.json')}
          autoPlay={false}
          loop={false}
          style={styles.confetti}
          onLayout={() => {
            confettiRef.current?.play();
          }}
        />

        <Box style={[globalStyles.columnCenter, { gap: 16 }]}>
          {/* Emoji Animation using Reanimated */}
          <Animated.Text style={[styles.emoji, animatedStyle]}>
            🏗️
          </Animated.Text>

          <Typography
            textAlign="center"
            color="black"
            variant="headingSemiBold24"
            paddingTop={16}
          >
            Your money is working
          </Typography>

          <Typography
            textAlign="center"
            color="darkGray"
            variant="bodyRegular16"
            paddingBottom={32}
          >
            Thank you for contributing to the estate. We’ll confirm your
            transaction soon.
          </Typography>

          <Button
            title="Continue"
            onPress={handleViewProject}
            containerStyle={{ alignSelf: 'stretch' }}
          />

          <Button
            title="Check other projects"
            outlined
            containerStyle={{ alignSelf: 'stretch' }}
            onPress={handleProject}
          />
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  confetti: {
    height: tokens.spacing[48] * 10,
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1,
  },
  emoji: {
    fontSize: 64,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing[24],
  },
});
