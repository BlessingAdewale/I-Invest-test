import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../constants/globalStyles';

import type { ComponentProps, ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

interface ISafeScreenViewProps extends ComponentProps<typeof SafeAreaView> {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  backgroundColor?: string;
}

const SafeScreenView = ({
  children,
  style,
  backgroundColor,
  ...rest
}: ISafeScreenViewProps) => {
  const backgroundStyle: ViewStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <SafeAreaView
      style={[globalStyles.wrapper, backgroundStyle, style]}
      {...rest}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeScreenView;
