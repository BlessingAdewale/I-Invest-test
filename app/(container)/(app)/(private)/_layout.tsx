import { Header } from '@react-navigation/elements';
import { Redirect, Stack } from 'expo-router';
import { useRecoilValue } from 'recoil';

import { authTokenState } from '@/src/constants/recoil/recoilAtom';
import { NAVIGATION_HEADER_HEIGHT, tokens } from '@/src/constants/tokens';

function PrivateLayout() {
  const authToken = useRecoilValue(authTokenState);

  if (!authToken) {
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
      <Stack.Screen
        name="notifications"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-estate"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="join-estate"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="create-estate"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="all-transactions"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="transaction-initiated"
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="verify-transaction"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="transaction-information"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-transaction"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-members"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="create-project"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-executives"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="withdraw-cash"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-finance"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="project-details"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-a-single-member"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-project"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="invite-members"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="make-payment-success"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-project-transaction"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="view-poll"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="create-poll"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="poll-details"
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="create-poll-success"
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="enter-account-information"
        options={{
          title: '',
          headerShown: true,
        }}
      />
    </Stack>
  );
}

export default PrivateLayout;
