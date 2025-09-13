import NetInfo from '@react-native-community/netinfo';
import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import { onlineManager } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';

interface IQueryClientProviderProps {
  children: React.ReactNode;
}

function QueryClientProvider({ children }: IQueryClientProviderProps) {
  const queryClient = new QueryClient();

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      return NetInfo.addEventListener((state) => {
        setOnline(!!state.isConnected && !!state.isInternetReachable);
      });
    });
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, []);

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
}

export default QueryClientProvider;
