import { Redirect } from 'expo-router';
import { useRecoilValue } from 'recoil';

import { isFirstTimeState } from '@/src/constants/recoil/recoilAtom';
import Onboarding from '@/src/screens/Public/Onboarding';

function OnboardingRoute() {
  const isFirstTime = useRecoilValue(isFirstTimeState);

  if (!isFirstTime) {
    return <Redirect href="/sign-in" />;
  }

  return <Onboarding />;
}

export default OnboardingRoute;
