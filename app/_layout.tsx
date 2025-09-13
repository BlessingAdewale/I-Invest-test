import 'react-native-reanimated';
//
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Set the animation options (optional)
SplashScreen.setOptions({
  duration: 500,
  fade: true,
});

export default function RootLayout() {
  return <Slot />;
}
