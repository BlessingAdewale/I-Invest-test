import { AntDesign } from '@expo/vector-icons';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type TPauseProjectBottomSheetProps = {
  closeSheet: () => void;
  setPaused: (val: boolean) => void;
};

export const PauseProjectBottomSheet = ({
  closeSheet,
  setPaused,
}: TPauseProjectBottomSheetProps) => {
  const handlePause = () => {
    setPaused(true);
    closeSheet();
  };

  return (
    <BottomSheetScrollView style={styles.container}>
      <Box
        paddingTop={10}
        paddingBottom={24}
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography variant="headingSemiBold24">Pause Project</Typography>
        <AntDesign name="close" size={24} onPress={closeSheet} />
      </Box>

      <Box paddingTop={24}>
        <Typography variant="bodyMedium16" color="darkGray">
          By pausing project, residence will not be able to continue with their
          payment. Do you wish to continue?
        </Typography>
      </Box>

      <Box
        style={{
          marginTop: tokens.spacing['24'],
          marginBottom: tokens.spacing['24'],
        }}
      >
        <Button title="Yes, continue" onPress={handlePause} />
        <Button
          title="Cancel"
          style={{
            marginTop: tokens.spacing['24'],
            marginBottom: tokens.spacing['16'],
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
