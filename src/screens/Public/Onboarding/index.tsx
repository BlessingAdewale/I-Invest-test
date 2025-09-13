import { StyleSheet} from 'react-native';
import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';

export default function Onboarding() {

  return (
    <SafeScreenView>
      <Box flex={1} justifyContent="space-between"></Box>
   
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
});
