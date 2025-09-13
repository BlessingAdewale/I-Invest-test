import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import SystemBars from '@/src/components/SystemBars';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { transactionState } from '@/src/constants/recoil/recoilAtom';
import { tokens } from '@/src/constants/tokens';

export default function TransactionInitiated() {
  const setTransaction = useSetRecoilState(transactionState);
  const resetTransaction = useResetRecoilState(transactionState);
  const transaction = useRecoilValue(transactionState);

  const emojiScale = useSharedValue(1);

  const animatedEmojiStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: emojiScale.value }],
    }),
    []
  );
  const confettiRef = useRef<LottieView>(null);

  useEffect(() => {
    // Mark transaction as initiated
    setTransaction((prev) => ({
      ...prev,
      transactionInitiated: true,
    }));
    // Animate emoji bounce
    emojiScale.value = withTiming(1.4, { duration: 500 }, (finished) => {
      if (finished) {
        emojiScale.value = withSpring(1);
      }
    });
  }, [emojiScale, setTransaction]);

  const handleContinue = () => {
    if (transaction.transactionApproved) {
      resetTransaction();
    }
    router.replace('/home');
  };

  return (
    <SafeScreenView backgroundColor={tokens.colors.primary}>
      <SystemBars style="light" />
      <ScrollView
        contentContainerStyle={[
          globalStyles.containerScroll,
          styles.scrollContent,
        ]}
      >
        {/* Confetti Lottie Animation */}
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

        <Box
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          style={{ gap: 16 }}
        >
          {/* Emoji bounce */}
          <Animated.Text style={[styles.emoji, animatedEmojiStyle]}>
            💸
          </Animated.Text>

          <Typography
            textAlign="center"
            color="white"
            variant="headingSemiBold24"
            paddingTop={16}
          >
            Transaction initiated
          </Typography>

          <Typography
            textAlign="center"
            color="white"
            variant="bodyRegular16"
            paddingBottom={32}
          >
            {transaction.transactionApproved
              ? 'You have approved this transaction, it will be verified soon.'
              : 'I-Invest has notified the other signatories to approve the transaction.'}
          </Typography>

          <Button
            title="Continue"
            onPress={handleContinue}
            containerStyle={{
              alignSelf: 'stretch',
              backgroundColor: tokens.colors.white,
              borderRadius: tokens.borderRadius[12],
            }}
            outlined
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
