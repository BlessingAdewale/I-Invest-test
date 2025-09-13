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
          colors={[tokens.colors.yellow, tokens.colors.blue]}
        start={{ x: 0.2, y: 0.8 }} 
  end={{ x: 0.8, y: 0.2 }} 
          style={[
            styles.gradientBorder,
            { width: size+ 1, height: size+1, borderRadius: size / 2 },
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
    padding: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
