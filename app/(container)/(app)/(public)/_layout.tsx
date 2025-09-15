import { Header } from '@react-navigation/elements';
import { Stack } from 'expo-router';

import { NAVIGATION_HEADER_HEIGHT, tokens } from '@/src/constants/tokens';

function PublicLayout() {
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
    </Stack>
  );
}

export default PublicLayout;
