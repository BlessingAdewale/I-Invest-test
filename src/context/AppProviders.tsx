import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { RecoilRoot } from 'recoil';

import QueryClientProvider from './QueryClientProvider';
import SystemBars from '../components/SystemBars';
import { globalStyles } from '../constants/globalStyles';

interface IAppProvidersProps {
  children: React.ReactNode;
}

const BASE_TOAST_TOP_OFFSET = 50 as const;

function AppProviders({ children }: IAppProvidersProps) {
  const { top } = useSafeAreaInsets();
  return (
    <GestureHandlerRootView style={globalStyles.fullFlex}>
      <RecoilRoot>
        <BottomSheetModalProvider>
          <QueryClientProvider>
            <KeyboardProvider>
              <SystemBars style="dark" />
              {children}
              <Toast
                position="top"
                visibilityTime={3000}
                topOffset={
                  Platform.OS === 'ios'
                    ? top / 6 + BASE_TOAST_TOP_OFFSET
                    : BASE_TOAST_TOP_OFFSET
                }
              />
            </KeyboardProvider>
          </QueryClientProvider>
        </BottomSheetModalProvider>
      </RecoilRoot>
    </GestureHandlerRootView>
  );
}

export default AppProviders;
