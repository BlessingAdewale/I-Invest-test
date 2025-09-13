import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type TJoinEstateBottomSheetProps = {
  closeSheet: () => void;
};

export const JoinEstateBottomSheet = ({
  closeSheet,
}: TJoinEstateBottomSheetProps) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomSheetScrollView style={styles.container}>
      <Image
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1733342586521-6d04831831bd?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        contentFit="cover"
        cachePolicy="memory-disk"
        style={styles.image}
      />
      <Box>
        <Typography variant="headingSemiBold24">
          Evergreen Estate phase 2
        </Typography>
        <Typography variant="bodyMedium16" paddingTop={8} color="darkGray">
          24, Cedar close, Ilorin, Kwara state
        </Typography>
      </Box>
      <Box marginY={24}>
        <Typography variant="bodyRegular14" color="darkGray">
          Number of occupant
        </Typography>
        <Typography variant="subtitleMedium18" paddingTop={8}>
          104 occupants
        </Typography>
      </Box>
      <Box>
        <Typography variant="bodyRegular14" color="darkGray">
          Executive body
        </Typography>
        <Typography variant="subtitleMedium18" paddingTop={8}>
          32 members
        </Typography>
      </Box>
      <Box
        style={{
          marginTop: tokens.spacing['24'],
          marginBottom: tokens.spacing['24'] + bottom,
        }}
      >
        <Button
          title="Join"
          style={{
            marginBottom: tokens.spacing['16'],
          }}
        />
        <Button title="Cancel" outlined onPress={closeSheet} />
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
  image: {
    backgroundColor: tokens.colors.lightGray,
    borderRadius: tokens.borderRadius['24'],
    height: 150,
    marginBottom: tokens.spacing['24'],
  },
});
