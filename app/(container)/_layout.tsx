import { Slot } from 'expo-router';

import AppProviders from '@/src/context/AppProviders';


function ContainerLayout() {
  return (
    <AppProviders>
      <Slot />
    </AppProviders>
  );
}
export default ContainerLayout;
