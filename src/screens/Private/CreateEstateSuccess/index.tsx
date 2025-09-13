import { router } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { PADDING_HORIZONTAL } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

export default function CreateEstateSuccess() {
  const navigateHome = () => {
    router.navigate('/home');
  };

  return (
    <SafeScreenView>
      {/* Buttons */}
      <Box flex={1} padding={PADDING_HORIZONTAL}>
        <Box flex={1} justifyContent="flex-end" paddingBottom={64}>
          <Text style={styles.icon}>✌🏽</Text>
        </Box>
        <Box>
          <Box paddingX={16}>
            <Typography
              color="black"
              variant="headingSemiBold24"
              textAlign="center"
              paddingBottom={16}
            >
              Your have created a new estate account
            </Typography>
            <Typography
              color="darkGray"
              variant="bodyMedium16"
              textAlign="center"
            >
              Access the estate invite link to add new members.
            </Typography>
          </Box>
          <Box marginTop={40}>
            <Button
              title="Go home"
              onPress={navigateHome}
              style={styles.createBtn}
            />
          </Box>
        </Box>
      </Box>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  createBtn: {
    marginBottom: tokens.spacing['24'],
  },
  icon: {
    fontSize: 64,
    textAlign: 'center',
  },
});
