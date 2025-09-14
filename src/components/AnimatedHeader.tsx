import * as React from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';

import { HeaderBackButton, HeaderTitle } from '@react-navigation/elements';
type AnimatedHeaderProps = {
  title: string;
  back?: { title?: string };
  headerRight?: (props: any) => React.ReactNode;
  headerTintColor?: string;
};

export function AnimatedHeader({
  title,
  back,
  headerRight,
  headerTintColor,
}: AnimatedHeaderProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  const iconTintColor = headerTintColor ?? colors.text;

  const leftButton = back ? (
    <HeaderBackButton
      tintColor={iconTintColor}
      onPress={() => navigation.goBack()}
      label={back.title}
    />
  ) : null;

  const rightButton = headerRight
    ? headerRight({ tintColor: iconTintColor })
    : null;

  const animatedValue = React.useRef(new Animated.Value(0)).current;

  return (
    <Animated.View style={[styles.container, { paddingTop: insets.top }]}>
      <Animated.View style={[styles.start]}>{leftButton}</Animated.View>
      <Animated.View style={[styles.title]}>
        <HeaderTitle>{title}</HeaderTitle>
      </Animated.View>
      <Animated.View style={[styles.end]}>{rightButton}</Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 60 : 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingHorizontal: 16,
  },
  start: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
