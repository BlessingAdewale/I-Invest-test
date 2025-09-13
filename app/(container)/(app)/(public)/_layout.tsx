import { Header } from '@react-navigation/elements';
import { Stack } from 'expo-router';
import { useRecoilValue } from 'recoil';

import { isFirstTimeState } from '@/src/constants/recoil/recoilAtom';
import { NAVIGATION_HEADER_HEIGHT, tokens } from '@/src/constants/tokens';

function PublicLayout() {
  const isFirstTime = useRecoilValue(isFirstTimeState);
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
          />
        ),
        headerShown: true,
        headerTintColor: tokens.colors.black,
        headerBackButtonDisplayMode: 'minimal',
        headerShadowVisible: false,
        animation: 'ios_from_right',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: isFirstTime ? true : false,
        }}
      />
      <Stack.Screen
        name="forgot-password-success"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up-success"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default PublicLayout;
