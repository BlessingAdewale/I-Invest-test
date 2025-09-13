import { Image } from 'expo-image';
import React, { memo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { tokens } from '../constants/tokens';
import { ACTIVE_OPACITY } from '../constants/globalStyles';

type AvatarProps = {
  uri?: string;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const Avatar = memo(
  ({ uri, size = 40, containerStyle, onPress }: AvatarProps) => {
    return (
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        onPress={onPress}
        style={containerStyle}
      >
        <LinearGradient
          colors={[tokens.colors.blue, tokens.colors.yellow]}
          style={[
            styles.gradientBorder,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        >
          <Image
            source={
              uri
                ? { uri }
                : require('../../assets/images/image.png')
            }
            style={{
              width: size - 2, 
              height: size - 2,
              borderWidth: 1.41,
              borderRadius: (size-4) / 2,
            }}
            contentFit="cover"
            transition={500}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  }
);

Avatar.displayName = 'Avatar';

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 2, // thickness of the gradient border
    justifyContent: 'center',
    alignItems: 'center',
  },
});
