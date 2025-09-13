import { router } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { PADDING_HORIZONTAL } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

export default function SignUpSuccess() {
  const navigateCreateEstate = () => {
    router.navigate('/create-estate');
  };
  const navigateJoinEstate = () => {
    router.navigate('/join-estate');
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
              Your account is ready and you're ready to join an estate
            </Typography>
            <Typography
              color="darkGray"
              variant="bodyMedium16"
              textAlign="center"
            >
              Get a code from an estate manager to join one or simply
            </Typography>
          </Box>
          <Box marginTop={40}>
            <Button
              title="Create new estate"
              onPress={navigateCreateEstate}
              style={styles.createBtn}
            />
            <Button
              title="Join a new estate"
              onPress={navigateJoinEstate}
              outlined
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
