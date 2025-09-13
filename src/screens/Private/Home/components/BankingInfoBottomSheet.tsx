import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import CopyText from '@/src/components/CopyText';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type TBankingInfoBottomSheetProps = {
  closeSheet: () => void;
};

export const BankingInfoBottomSheet = ({
  closeSheet,
}: TBankingInfoBottomSheetProps) => {
  return (
    <BottomSheetScrollView style={styles.container}>
      <Typography
        variant="headingSemiBold24"
        paddingTop={10}
        paddingBottom={24}
      >
        Account Information
      </Typography>
      <Box>
        <Typography variant="bodyMedium16" color="darkGray">
          Account number
        </Typography>
        <Box flexDirection="row" justifyContent="space-between">
          <Typography variant="subtitleMedium18" paddingTop={8}>
            9091474034
          </Typography>
          <CopyText textToCopy="9091474034" />
        </Box>
      </Box>
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
      <Box paddingTop={24}>
        <Typography variant="bodyMedium16" color="darkGray">
          Account name
        </Typography>
        <Box>
          <Typography variant="subtitleMedium18" paddingTop={8}>
            Savannah Estate Phase 2 Bank
          </Typography>
        </Box>
      </Box>

      <Button
        title="Cancel"
        outlined
        onPress={closeSheet}
        style={{
          marginVertical: tokens.spacing['24'],
        }}
      />
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
