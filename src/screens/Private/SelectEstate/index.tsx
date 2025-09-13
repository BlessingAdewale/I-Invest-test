import { router } from 'expo-router';
import { ScrollView } from 'react-native';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';

import { AddNewEstateButton } from '@/src/components/AddNewEstateButton';
import { AnimatedBox } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';

import EstateCard from './components/EstateCard';

export default function SelectEstate() {
  const navigateToEstateCreation = () => {
    router.navigate('/create-estate');
  };

  return (
    <SafeScreenView>
      <AnimatedBox
        entering={ZoomIn.duration(500)}
        exiting={ZoomOut.duration(500)}
        flex={1}
      >
        <ScrollView contentContainerStyle={globalStyles.containerScroll}>
          <Typography variant="headingSemiBold24" paddingY={32}>
            Which estate are you logging into?
          </Typography>
          <EstateCard
            title="Evergreen estate"
            uri="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            location="Evergreen, Ilorin"
            occupants={111}
          />
          <EstateCard
            title="Evergreen estate"
            uri="https://plus.unsplash.com/premium_photo-1661963657305-f52dcaeef418?q=80&w=3912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            location="Lekki, Lagos"
            occupants={78}
          />
          <EstateCard
            title="Evergreen estate"
            uri="https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70?q=80&w=3421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            location="Lekki, Lagos"
            occupants={36}
          />
          <EstateCard
            title="Join a new estate"
            subtitle="Find new estate using estate code"
          />
        </ScrollView>
        <AddNewEstateButton onPress={navigateToEstateCreation} />
      </AnimatedBox>
    </SafeScreenView>
  );
}
