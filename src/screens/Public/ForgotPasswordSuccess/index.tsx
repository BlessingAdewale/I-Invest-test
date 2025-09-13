import { router } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { PADDING_HORIZONTAL } from '@/src/constants/globalStyles';

export default function ForgotPasswordSuccess() {
  const navigateSignIn = () => {
    router.dismiss();
  };

  return (
    <SafeScreenView>
      {/* Buttons */}
      <Box flex={1} justifyContent="center" padding={PADDING_HORIZONTAL}>
        <Text style={styles.icon}>🔐</Text>
        <Typography
          color="black"
          variant="headingSemiBold24"
          textAlign="center"
          paddingY={24}
        >
          Your password has been reset and you can now continue to enjoy
          parthian
        </Typography>

        <Button title="Sign in" onPress={navigateSignIn} />
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
