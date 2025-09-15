//
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import * as NavigationBar from "expo-navigation-bar";
//
import { authTokenState } from "@/src/constants/recoil/recoilAtom";
import { getTokenFromUserDevice } from "@/src/utils/getTokenFromUserDevice";
import { getPersistedItem, setPersistedItem } from "@/src/utils/persistStorage";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Box } from "@/src/components/Box";

export default function AppLayout() {
  const [isBootStraping, setIsBootStraping] = useState(true);

  const setAuthTokenState = useSetRecoilState(authTokenState);

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setButtonStyleAsync("light");
      NavigationBar.setBackgroundColorAsync("dark");
    }
  }, []);

  useEffect(() => {
    const bootStrap = async () => {
      const [isFirstTimestorageValueExist, authToken] = await Promise.all([
        getPersistedItem("isFirstTime"),
        getTokenFromUserDevice(),
      ]);
      console.log("authToken", authToken);
      if (isFirstTimestorageValueExist) {
        if (authToken) {
          setAuthTokenState(authToken);
        }
        return;
      }
      await setPersistedItem("isFirstTime", "isFirstTime");
    };

    //
    bootStrap()
      .catch()
      .finally(async () => {
        setIsBootStraping(false);
        await SplashScreen.hideAsync();
      });
  }, [setAuthTokenState]);

  if (isBootStraping) {
    return null;
  }

  return (
    <Box flex={1}>
      <Slot />
      <StatusBar style="dark" backgroundColor={"#FFFFFF"} />
    </Box>
  );
}
