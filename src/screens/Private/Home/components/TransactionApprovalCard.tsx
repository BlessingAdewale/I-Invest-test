import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { memo } from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { globalStyles, PADDING_HORIZONTAL } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

export type TTransactionApprovalCardProps = {
  title: string;
  callToAction: string;
  backgroundColor: 'secondaryDark';
  totalAdsCount: number;
  backgroundImage?: string;
};

export const TransactionApprovalCard = ({
  title,
  callToAction,
  backgroundImage,
}: TTransactionApprovalCardProps) => {
  const { width } = useWindowDimensions();

  const bgColor = tokens.colors.secondaryDark;

  const handlePress = () => {
    router.navigate('/transaction-information');
  };

  return (
    <Box
      style={[
        styles.bannerImage,
        { width: width - PADDING_HORIZONTAL * 2, backgroundColor: bgColor },
      ]}
    >
      {backgroundImage ? (
        <ImageBackground
          source={{ uri: backgroundImage }}
          style={StyleSheet.absoluteFill}
          imageStyle={{ borderRadius: tokens.borderRadius[16] }}
        >
          <Box
            style={[
              StyleSheet.absoluteFillObject,
              {
                backgroundColor: bgColor,
                opacity: 1,
              },
            ]}
          />
        </ImageBackground>
      ) : (
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: bgColor, opacity: tokens.spacing[2] },
          ]}
        />
      )}

      <Box
        paddingLeft={20}
        paddingRight={14}
        paddingBottom={10}
        style={styles.typographyContainer}
      >
        <Box flexDirection="row">
          <Box flex={1} paddingTop={16} paddingBottom={20} paddingRight={8}>
            <Typography paddingBottom={6} variant="bodyRegular14" color="black">
              Approve transaction
            </Typography>
            <Typography
              variant="subtitleMedium20"
              color="white"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {title}
            </Typography>
          </Box>
        </Box>

        <Pressable onPress={handlePress} style={globalStyles.rowStart}>
          <Typography variant="bodyMedium14" color="white">
            {callToAction}
          </Typography>
          <AntDesign name="arrowright" size={16} color={tokens.colors.white} />
        </Pressable>
      </Box>
    </Box>
  );
};

export default memo(TransactionApprovalCard);

const styles = StyleSheet.create({
  bannerImage: {
    borderRadius: tokens.borderRadius[16],
    height: 140,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  typographyContainer: {
    zIndex: 1,
  },
});
