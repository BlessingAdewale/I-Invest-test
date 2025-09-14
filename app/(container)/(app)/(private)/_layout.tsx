import { getHeaderTitle, Header } from "@react-navigation/elements";
import { Redirect, Stack } from "expo-router";
import { useRecoilValue } from "recoil";

import { authTokenState } from "@/src/constants/recoil/recoilAtom";
import { tokens } from "@/src/constants/tokens";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function PrivateLayout() {
  const authToken = useRecoilValue(authTokenState);
  const insets = useSafeAreaInsets();
  if (authToken) {
    return <Redirect href="/" />;
  }

  return (
    <Stack
      screenOptions={{
        header: ({ options, back, route }) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <Header
              {...options}
              back={back}
              title={title}
              headerStatusBarHeight={insets.top - tokens.spacing[2]}
              headerRight={options.headerRight}
              headerLeftContainerStyle={{ paddingLeft: tokens.spacing[4] }}
            />
          );
        },
        headerShown: false,
        headerTintColor: tokens.colors.textSecondary,
        headerBackButtonDisplayMode: "minimal",
        headerTitleStyle: {
          fontSize: tokens.spacing[14],
          fontWeight: "700",
          color: tokens.colors.headerTitleColor,
          fontFamily: "TikTokSans-Bold",
        },
        headerShadowVisible: false,
        animation: "ios_from_right",
      }}
    >
      <Stack.Screen
        name="portfolio-distribution"
        options={{
          headerShown: true,
          headerTitle: "Portfolio Distribution",
          animation: "ios_from_right",
        }}
      />
      <Stack.Screen
        name="view-portfolio"
        options={{
          headerShown: true,
          headerTitle: "",
          animation: "ios_from_right",
        }}
      />
    </Stack>
  );
}

export default PrivateLayout;
