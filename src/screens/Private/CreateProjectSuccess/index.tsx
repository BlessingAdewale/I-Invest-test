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

export default function CreateProjectSuccess() {
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

  const handleGoHome = useCallback(() => {
    router.replace('/home');
  }, []);

  const handleCreateAnother = useCallback(() => {
    router.back();
  }, []);

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
          {/* Emoji Animation */}
          <Animated.Text style={[styles.emoji, animatedStyle]}>
            🏗️
          </Animated.Text>

          <Typography
            textAlign="center"
            color="black"
            variant="headingSemiBold24"
            paddingTop={16}
          >
            New project created
          </Typography>

          <Typography
            textAlign="center"
            color="darkGray"
            variant="bodyRegular16"
            paddingBottom={32}
          >
            This project is now live and notifications have been sent to every
            member of the estate.
          </Typography>

          <Button
            title="Continue"
            onPress={handleGoHome}
            containerStyle={{ alignSelf: 'stretch' }}
          />

          <Button
            title="Create another project"
            outlined
            containerStyle={{ alignSelf: 'stretch' }}
            onPress={handleCreateAnother}
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
