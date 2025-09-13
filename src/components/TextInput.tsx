import { Ionicons } from '@expo/vector-icons';
import React, { memo, useCallback } from 'react';
import { FieldError } from 'react-hook-form';
import {
  ActivityIndicator,
  ColorValue,
  FlexStyle,
  Text as RNText,
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimatedBox, Box } from './Box';
import { AnimatedTypography, Typography } from './Typography';
import { globalStyles } from '../constants/globalStyles';
import { tokens } from '../constants/tokens';
import { useSecureTextEntry } from '../hooks/useSecureTextEntry';

type InputProps = TextInputProps & {
  label?: string;
  info?: string;
  error?: FieldError;
  required?: boolean;
  height?: number;
  disableBorder?: boolean;
  wrapperWidth?: FlexStyle['width'];
  isLoading?: boolean;
  isPassword?: boolean;
  editable?: boolean;
  editableBackGroundColor?: ColorValue;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  infoStyle?: StyleProp<TextStyle>;
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
};

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

export const TextInput = memo(
  ({
    label,
    required = false,
    wrapperWidth,
    height = 54,
    isPassword,
    isLoading,
    disableBorder = false,
    editable = true,
    error,
    containerStyle,
    style,
    labelStyle,
    iconRight,
    iconLeft,
    ...rest
  }: InputProps) => {
    const isInputFocused = useSharedValue(false);
    const { secureTextEntry, toggleEntry } = useSecureTextEntry(
      isPassword || false
    );

    const onFocus = useCallback(() => {
      isInputFocused.value = true;
    }, [isInputFocused]);

    const onBlur = useCallback(() => {
      isInputFocused.value = false;
    }, [isInputFocused]);

    const animatedStyles = useAnimatedStyle(() => {
      if (disableBorder) {
        return {
          borderWidth: 0,
          borderColor: 'transparent',
        };
      }

      if (error) {
        return {
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: tokens.colors.red,
        };
      }
      if (disableBorder) {
        return {
          borderWidth: 0,
          borderColor: 'transparent',
        };
      }
      return {
        borderWidth: withTiming(
          isInputFocused.value ? StyleSheet.hairlineWidth : 0.8,
          {
            duration: 100,
          }
        ),
        borderColor: withTiming(
          isInputFocused.value
            ? error
              ? tokens.colors.red
              : tokens.colors.primary
            : tokens.colors.lighterGray,
          {
            duration: 100,
          }
        ),
      };
    });

    return (
      <Box marginBottom={12} style={{ width: wrapperWidth }}>
        {label ? (
          <RNText style={[{ paddingBottom: tokens.spacing['4'] }, labelStyle]}>
            <Typography variant="bodyRegular14" color="darkGray">
              {label}
            </Typography>
            {required ? (
              <Typography variant="bodyMedium16"> *</Typography>
            ) : null}
          </RNText>
        ) : null}
        <AnimatedBox
          style={[
            styles.container,
            globalStyles.rowBetween,
            { height },
            editable === false && {
              backgroundColor: tokens.colors.lightGray,
            },
            animatedStyles,
            containerStyle,
          ]}
        >
          {iconLeft ? (
            <Box marginRight={8} justifyContent="center">
              {iconLeft}
            </Box>
          ) : null}

          <AnimatedTextInput
            placeholderTextColor={tokens.colors.gray}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
            textAlignVertical="center"
            editable={!isLoading && editable}
            style={[styles.input, { height }, style]}
            {...rest}
            onFocus={onFocus}
            onBlur={onBlur}
          />

          {isLoading ? (
            <Box marginLeft={12}>
              <ActivityIndicator size="small" color={tokens.colors.primary} />
            </Box>
          ) : isPassword ? (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ marginLeft: 10 }}
              onPress={toggleEntry}
            >
              <Ionicons
                name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color={tokens.colors.gray}
              />
            </TouchableOpacity>
          ) : (
            iconRight ?? null
          )}
        </AnimatedBox>

        <AnimatedTypography
          entering={FadeIn}
          variant="bodyRegular12"
          color="red"
          paddingTop={2}
        >
          {error?.message || ''}
        </AnimatedTypography>
      </Box>
    );
  }
);

TextInput.displayName = 'TextInput';

const styles = StyleSheet.create({
  container: {
    borderRadius: tokens.borderRadius['14'],
    paddingHorizontal: tokens.spacing['16'],
  },
  input: {
    borderRadius: 4,
    color: tokens.colors.black,
    flex: 1,
    fontFamily: 'InterTight-Regular',
    fontSize: tokens.spacing['14'],
  },
});
