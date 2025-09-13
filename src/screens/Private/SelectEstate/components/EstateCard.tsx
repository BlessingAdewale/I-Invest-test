import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { BadgeIcon } from '@/assets/svgs/MarketIcon';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import {
  ACTIVE_OPACITY,
  globalStyles,
  IMAGE_SIZE,
  PADDING_HORIZONTAL,
} from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

type TSubtitleProps = {
  title: string;
  uri?: string;
  subtitle: string;
  location?: never;
  occupants?: never;
};

type TLocationOccupantsProps = {
  title: string;
  uri?: string;
  subtitle?: never;
  location: string;
  occupants: number;
};

type TEstateCardProps = (TSubtitleProps | TLocationOccupantsProps) & {
  favourite?: boolean;
};

const EstateCard = ({
  uri,
  title,
  subtitle,
  location,
  occupants,
  favourite = false,
}: TEstateCardProps) => {
  const navigateToEstateCreation = () => {
    if (subtitle) {
      router.navigate('/join-estate');
      return;
    }
    router.replace('/home');
  };

  return (
    <TouchableOpacity
      onPress={navigateToEstateCreation}
      activeOpacity={ACTIVE_OPACITY}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        {...(favourite && {
          paddingY: 10,
          borderRadius: tokens.borderRadius[24],
        })}
        marginBottom={32}
        style={
          favourite
            ? { backgroundColor: tokens.colors.extraLightGray }
            : undefined
        }
      >
        <Box style={styles.imageWrapper}>
          <Box style={[styles.image, subtitle && globalStyles.rowCenter]}>
            {subtitle ? (
              <AntDesign
                name="adduser"
                size={20}
                color={tokens.colors.darkGray}
              />
            ) : (
              <Image
                style={styles.image}
                source={{ uri }}
                contentFit="cover"
                cachePolicy="memory-disk"
              />
            )}
          </Box>

          {favourite && (
            <Box style={styles.badgeContainer}>
              <BadgeIcon />
            </Box>
          )}
        </Box>

        <Box flex={1} paddingLeft={16}>
          <Typography variant="subtitleMedium18">{title}</Typography>
          <Box marginTop={4}>
            {subtitle ? (
              <Typography variant="bodyRegular14" color="darkGray">
                {subtitle}
              </Typography>
            ) : (
              <Box flexDirection="row" alignItems="center">
                <Typography variant="bodyRegular14" color="darkGray">
                  {location}
                </Typography>
                <Typography variant="bodyRegular14" color="black" paddingX={4}>
                  {'\u2022'}
                </Typography>
                <Typography variant="bodyRegular14" color="darkGray">
                  {occupants} occupants
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default EstateCard;

const styles = StyleSheet.create({
  badgeContainer: {
    bottom: -(PADDING_HORIZONTAL / 5),
    position: 'absolute',
    right: -(PADDING_HORIZONTAL / 8) * 2,
  },
  image: {
    backgroundColor: tokens.colors.lighterGray,
    borderRadius: tokens.borderRadius['12'],
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
  imageWrapper: {
    position: 'relative',
  },
});
