import { router } from 'expo-router';
import { ScrollView } from 'react-native';
import { useSetRecoilState } from 'recoil';

import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { authTokenState } from '@/src/constants/recoil/recoilAtom';
import { deleteSecureItem } from '@/src/utils/secureStorage';

export default function Settings() {
  const setAuthToken = useSetRecoilState(authTokenState);

  const handleLogout = () => {
    void deleteSecureItem('authToken');
    setAuthToken(null);
    if (router.canDismiss()) {
      router.dismissAll();
    }
    router.replace({
      pathname: '/sign-in',
    });
  };

  return (
    <SafeScreenView>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography variant="headingSemiBold24">Settings</Typography>
        <Button title="Log out" onPress={handleLogout} />
      </ScrollView>
    </SafeScreenView>
  );
}
