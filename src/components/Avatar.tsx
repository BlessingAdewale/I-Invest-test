import { Image } from 'expo-image';
import React, { memo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { tokens } from '../constants/tokens';

type AvaterProps = {
  uri?: string;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const DEFAULT_IMAGE_URI =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww';

export const Avatar = memo(
  ({ uri, size = 100, containerStyle, onPress }: AvaterProps) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
          styles.container,
          containerStyle,
        ]}
      >
        <Image
          source={{ uri: uri || DEFAULT_IMAGE_URI }}
          style={[styles.img, { borderRadius: size / 2 }]}
          contentFit="cover"
          transition={500}
        />
      </TouchableOpacity>
    );
  }
);

Avatar.displayName = 'Avatar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.colors.lightGray,
  },
  img: {
    flex: 1,
  },
});
