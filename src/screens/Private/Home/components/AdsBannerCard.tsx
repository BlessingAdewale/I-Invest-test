import Ionicons from '@expo/vector-icons/Ionicons';
import React, { memo } from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import {
  ACTIVE_OPACITY,
  PADDING_HORIZONTAL,
} from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

export type TAdsBannerCardProps = {
  id: string;
  title: string;
  callToAction: string;
  backgroundColor: 'primary' | 'black';
  totalAdsCount: number;
  //   onClose: (id: string) => void;
  backgroundImage: string;
};

export const AdsBannerCard = ({
  //   id,
  title,
  callToAction,
  backgroundColor,
  totalAdsCount,
  //   onClose,
  backgroundImage,
}: TAdsBannerCardProps) => {
  const { width } = useWindowDimensions();
  //   const handleClose = () => onClose(id);

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={[styles.bannerImage, { width: width - PADDING_HORIZONTAL * 2 }]}
      imageStyle={{ borderRadius: tokens.borderRadius[16] }}
    >
      <Box
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor:
              backgroundColor === 'primary'
                ? tokens.colors.primary
                : tokens.colors.black,
            opacity: ACTIVE_OPACITY + 0.2,
          },
        ]}
      >
        <Box
          paddingLeft={20}
          paddingRight={14}
          style={styles.typographyContainer}
        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box flex={1} paddingTop={16} paddingBottom={20} paddingRight={8}>
              <Typography
                variant="subtitleMedium20"
                color="white"
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {title}
              </Typography>
            </Box>

            {totalAdsCount > 1 && (
              <Pressable onPress={() => null}>
                <Ionicons
                  name="close"
                  size={24}
                  color={tokens.colors.white}
                  style={{ paddingBottom: 30 }}
                />
              </Pressable>
            )}
          </Box>

          <Pressable onPress={() => null}>
            <Typography variant="bodyMedium14" color="white">
              {callToAction}
            </Typography>
          </Pressable>
        </Box>
      </Box>
    </ImageBackground>
  );
};

export default memo(AdsBannerCard);

const styles = StyleSheet.create({
  bannerImage: {
    borderRadius: tokens.borderRadius[12],
    height: 140,
    justifyContent: 'flex-end',
  },
  typographyContainer: {
    zIndex: 1,
  },
});
