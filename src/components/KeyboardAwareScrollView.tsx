import { type ReactNode, forwardRef, memo } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView as ControllerKeyboardAwareScrollView } from 'react-native-keyboard-controller';

import type { StyleProp, ViewStyle } from 'react-native';
import type { KeyboardAwareScrollViewProps } from 'react-native-keyboard-controller';

interface IKeyboardAwareScrollView extends KeyboardAwareScrollViewProps {
  children: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const DEFAULT_BOTTOM_OFFSET = 50;

const KeyboardAwareScrollView = memo(
  forwardRef<ScrollView, IKeyboardAwareScrollView>(
    ({ children, contentContainerStyle, bottomOffset, ...props }, ref) => {
      return (
        <ControllerKeyboardAwareScrollView
          ref={ref}
          contentContainerStyle={[contentContainerStyle, { flexGrow: 1 }]}
          showsVerticalScrollIndicator={false}
          bottomOffset={bottomOffset ?? DEFAULT_BOTTOM_OFFSET}
          {...props}
        >
          {children}
        </ControllerKeyboardAwareScrollView>
      );
    }
  )
);

KeyboardAwareScrollView.displayName = 'KeyboardAwareScrollView';

export default KeyboardAwareScrollView;
