import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import CopyText from '@/src/components/CopyText';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type TMakePaymentBottomSheetProps = {
  closeSheet: () => void;
};

const EXPIRATION_TIME_IN_SECONDS = 60 * 2; // 2 minutes

export const MakePaymentBottomSheet = ({
  closeSheet,
}: TMakePaymentBottomSheetProps) => {
  const [remainingSeconds, setRemainingSeconds] = useState(
    EXPIRATION_TIME_IN_SECONDS
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handlePayment = useCallback(() => {
    router.replace('/make-payment-success');
  }, []);

  return (
    <BottomSheetScrollView style={styles.container}>
      <Typography
        variant="headingSemiBold24"
        paddingTop={10}
        paddingBottom={24}
      >
        Account Information
      </Typography>

      {/* Account Number */}

      <Typography variant="bodyMedium16" color="darkGray">
        Account number
      </Typography>
      <Box flexDirection="row" justifyContent="space-between">
        <Typography variant="subtitleMedium18" paddingTop={8}>
          9091474034
        </Typography>
        <CopyText textToCopy="9091474034" />
      </Box>

      {/* Bank */}
      <Box paddingTop={24}>
        <Typography variant="bodyMedium16" color="darkGray">
          Bank
        </Typography>
        <Box flexDirection="row" justifyContent="space-between">
          <Typography variant="subtitleMedium18" paddingTop={8}>
            Paystack-Titan Bank
          </Typography>
          <CopyText textToCopy="Paystack-Titan Bank" />
        </Box>
      </Box>

      {/* Account Name */}
      <Box paddingTop={24}>
        <Typography variant="bodyMedium16" color="darkGray">
          Account name
        </Typography>
        <Typography variant="subtitleMedium18" paddingTop={8}>
          Savannah Estate Phase 2 Bank
        </Typography>
      </Box>

      {/* Expiration Countdown */}
      <Box paddingTop={24}>
        <Typography variant="bodyMedium16" color="darkGray">
          Account number expires in
        </Typography>
        <Typography
          variant="subtitleMedium18"
          paddingTop={8}
          color={remainingSeconds <= 30 ? 'secondary' : undefined}
        >
          {formatTime(remainingSeconds)}
        </Typography>
      </Box>

      {/* Action Buttons */}
      <Box
        style={{
          marginTop: tokens.spacing['24'],
          marginBottom: tokens.spacing['24'],
        }}
      >
        <Button
          title={
            remainingSeconds <= 0 ? 'Account expired' : "I've made payment"
          }
          disabled={remainingSeconds <= 0}
          onPress={handlePayment}
        />
        <Button
          title="Cancel"
          style={{
            marginTop: tokens.spacing['12'],
            marginBottom: tokens.spacing[16],
          }}
          outlined
          onPress={closeSheet}
        />
      </Box>
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: tokens.spacing['24'],
    paddingHorizontal: tokens.spacing['16'],
    paddingTop: tokens.spacing['8'],
  },
});
