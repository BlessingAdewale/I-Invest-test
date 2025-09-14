import { Header } from '@react-navigation/elements';
import { Redirect, Stack } from 'expo-router';
import { useRecoilValue } from 'recoil';

import { authTokenState } from '@/src/constants/recoil/recoilAtom';
import { NAVIGATION_HEADER_HEIGHT, tokens } from '@/src/constants/tokens';

function PrivateLayout() {
  const authToken = useRecoilValue(authTokenState);

  if (authToken) {
    return <Redirect href="/" />;
  }

  return (
    <Stack
      screenOptions={{
        header: ({ options, back }) => (
          <Header
            {...options}
            back={back}
            title=""
            headerStyle={{
              height: NAVIGATION_HEADER_HEIGHT,
            }}
            headerRight={options.headerRight}
          />
        ),
        headerShown: false,

        headerTintColor: tokens.colors.black,
        headerBackButtonDisplayMode: 'minimal',
        headerShadowVisible: false,
        animation: 'ios_from_right',
      }}
    >    
    </Stack>
  );
}

export default PrivateLayout;
