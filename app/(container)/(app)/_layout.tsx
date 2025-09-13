//
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

//
import {
  authTokenState,
  isFirstTimeState,
} from '@/src/constants/recoil/recoilAtom';
import { getTokenFromUserDevice } from '@/src/utils/getTokenFromUserDevice';
import { getPersistedItem, setPersistedItem } from '@/src/utils/persistStorage';

export default function AppLayout() {
  const [isBootStraping, setIsBootStraping] = useState(true);
  const setIsFirstTime = useSetRecoilState(isFirstTimeState);
  const setAuthTokenState = useSetRecoilState(authTokenState);

  useEffect(() => {
    setIsFirstTime(true);
    const bootStrap = async () => {
      const [isFirstTimestorageValueExist, authToken] = await Promise.all([
        getPersistedItem('isFirstTime'),
        getTokenFromUserDevice(),
      ]);
      console.log('authToken', authToken);
      if (isFirstTimestorageValueExist) {
        setIsFirstTime(false);
        if (authToken) {
          setAuthTokenState(authToken);
        }
        return;
      }
      await setPersistedItem('isFirstTime', 'isFirstTime');
      setIsFirstTime(true);
    };

    //
    bootStrap()
      .catch()
      .finally(async () => {
        setIsBootStraping(false);
        await SplashScreen.hideAsync();
      });
  }, [setAuthTokenState, setIsFirstTime]);

  if (isBootStraping) {
    return null;
  }

  return <Slot />;
}
