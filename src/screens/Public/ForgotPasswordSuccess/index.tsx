import { router } from 'expo-router';
import { StyleSheet} from 'react-native';

import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { PADDING_HORIZONTAL } from '@/src/constants/globalStyles';

export default function ForgotPasswordSuccess() {
  const navigateSignIn = () => {
    router.dismiss();
  };

  return (
    <SafeScreenView>
      {/* Buttons */}
      <Box flex={1} justifyContent="center" padding={PADDING_HORIZONTAL}>
      </Box>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 64,
    textAlign: 'center',
  },
});
