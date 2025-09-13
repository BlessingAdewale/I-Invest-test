import React, { memo } from 'react';
import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { Box } from './Box';
import { Typography } from './Typography';
import { globalStyles } from '../constants/globalStyles';
import { tokens } from '../constants/tokens';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  color?: ColorValue;
  isDanger?: boolean;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  iconLeft?: React.ReactElement;
  iconLeftStyle?: StyleProp<ViewStyle>;
};

export const Button = memo(
  ({
    title,
    outlined,
    loaderColor = tokens.colors.white,
    disabled,
    isLoading = false,
    style,
    containerStyle,
    iconLeft,
    iconLeftStyle,
    ...rest
  }: ButtonProps) => {
    return (
      <Box style={containerStyle}>
        <TouchableOpacity
          activeOpacity={outlined ? 0.5 : 0.8}
          disabled={isLoading === true ? isLoading : disabled}
          style={[
            outlined ? styles.btnOutlined : styles.btn,
            globalStyles.rowCenter,
            {
              opacity: disabled ? 0.5 : 1,
            },
            disabled && { backgroundColor: tokens.colors.gray },
            style,
          ]}
          {...rest}
        >
          <>
            {iconLeft ? (
              <Box marginRight={8} style={iconLeftStyle}>
                {iconLeft}
              </Box>
            ) : null}
            <Typography
              variant="bodyMedium16"
              color={outlined ? 'black' : 'white'}
            >
              {title}
            </Typography>
            {isLoading ? (
              <ActivityIndicator
                animating
                size="small"
                color={loaderColor}
                style={{ marginLeft: 10 }}
              />
            ) : (
              <Box />
            )}
          </>
        </TouchableOpacity>
      </Box>
    );
  }
);

Button.displayName = 'Button';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: tokens.colors.primary,
    borderRadius: tokens.borderRadius['12'],
    height: 54,
  },
  btnOutlined: {
    backgroundColor: tokens.colors.transparent,
    borderColor: tokens.colors.lighterGray,
    borderRadius: tokens.borderRadius['12'],
    borderWidth: 1,
    height: 54,
  },
});
