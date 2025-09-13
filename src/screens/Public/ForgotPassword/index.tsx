import { Box } from '@/src/components/Box';
import KeyboardAwareScrollView from '@/src/components/KeyboardAwareScrollView';
import SafeScreenView from '@/src/components/SafeAreaScreen';

import { globalStyles } from '@/src/constants/globalStyles';

export default function ForgotPassword() {

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <KeyboardAwareScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={globalStyles.containerScroll}
      >
        <Box style={{ flex: 1, justifyContent: 'space-between' }}>
          </Box>

      </KeyboardAwareScrollView>
    </SafeScreenView>
  );
}
