import React from 'react';
import { FlatList } from 'react-native';

import { AddNewEstateButton } from '@/src/components/AddNewEstateButton';
import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import EstateCard from '@/src/screens/Private/SelectEstate/components/EstateCard';

import ProfileHeader from './components/ProfileHeader';

type TEstateItem = {
  id: string;
  title: string;
  subtitle?: string;
  uri?: string;
  location?: string;
  occupants?: number;
  favourite?: boolean;
};

const estateData: TEstateItem[] = [
  {
    id: '1',
    title: 'Evergreen estate',
    uri: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e',
    location: 'Evergreen, Ilorin',
    occupants: 111,
    favourite: true,
  },
  {
    id: '2',
    title: 'Evergreen estate',
    uri: 'https://plus.unsplash.com/premium_photo-1661963657305-f52dcaeef418',
    location: 'Lekki, Lagos',
    occupants: 78,
  },
  {
    id: '3',
    title: 'Evergreen estate',
    uri: 'https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70',
    location: 'Lekki, Lagos',
    occupants: 36,
  },
  {
    id: '4',
    title: 'Join a new estate',
    subtitle: 'Find new estate using estate code',
  },
];

export default function Estate() {
  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <FlatList
        data={estateData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EstateCard
            title={item.title}
            {...(item.subtitle
              ? { subtitle: item.subtitle }
              : {
                  uri: item.uri ?? '',
                  location: item.location ?? '',
                  occupants: item.occupants ?? 0,
                })}
            favourite={item.favourite ?? false}
          />
        )}
        ListHeaderComponent={
          <Box>
            <ProfileHeader />
            <Typography paddingY={16} variant="bodyMedium16" color="darkGray">
              My Estates
            </Typography>
          </Box>
        }
        contentContainerStyle={globalStyles.containerScroll}
      />
      <AddNewEstateButton onPress={() => null} />
    </SafeScreenView>
  );
}
