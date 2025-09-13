import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Text as RNText, StyleSheet, TouchableOpacity } from 'react-native';
import { FadeIn } from 'react-native-reanimated';

import { GalleryIcon } from '@/assets/svgs';
import { Box } from '@/src/components/Box';
import { AnimatedTypography, Typography } from '@/src/components/Typography';
import { ACTIVE_OPACITY } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

const CONTAINER_HEIGHT = 70;

type TEstateCoverImageSelectorProps = {
  onImageSelect: (image: string) => void;
  error?: string;
};

const EstateCoverImageSelector = ({
  onImageSelect,
  error,
}: TEstateCoverImageSelectorProps) => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
    });
    console.log(result);
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      onImageSelect(uri);
      setImage(uri);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      style={styles.wrapper}
      onPress={pickImage}
    >
      <RNText style={{ paddingBottom: tokens.spacing['4'] }}>
        <Typography variant="bodyRegular14" color="darkGray">
          Cover image
        </Typography>
        <Typography variant="bodyMedium16"> *</Typography>
      </RNText>
      <Box
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        style={[
          styles.container,
          {
            borderColor: error ? tokens.colors.red : tokens.colors.lighterGray,
            borderWidth: error ? StyleSheet.hairlineWidth : 0.8,
          },
        ]}
      >
        <Box
          justifyContent="center"
          alignItems="center"
          backgroundColor="lighterGray"
          style={styles.iconSection}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.image}
              contentFit="cover"
            />
          ) : (
            <GalleryIcon />
          )}
        </Box>
        <Box flex={1} marginLeft={16}>
          <Typography variant="bodyMedium16">Upload cover image</Typography>
          <Typography variant="bodyRegular14" paddingTop={8} color="darkGray">
            Select image from gallery
          </Typography>
        </Box>
      </Box>
      <AnimatedTypography
        entering={FadeIn}
        variant="bodyRegular12"
        color="red"
        paddingTop={2}
      >
        {error || ''}
      </AnimatedTypography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: tokens.colors.lighterGray,
    borderRadius: tokens.borderRadius['14'],
    height: CONTAINER_HEIGHT,
  },
  iconSection: {
    borderRadius: tokens.borderRadius['8'],
    height: CONTAINER_HEIGHT - tokens.spacing['4'] * 2,
    marginLeft: tokens.spacing['4'],
    width: '30%',
  },
  image: {
    borderRadius: tokens.borderRadius['8'],
    height: CONTAINER_HEIGHT - tokens.spacing['4'] * 2,
    width: '100%',
  },
  wrapper: {
    marginBottom: tokens.spacing['12'],
  },
});

export default EstateCoverImageSelector;
