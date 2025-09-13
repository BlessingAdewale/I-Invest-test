import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { ACTIVE_OPACITY, globalStyles } from '@/src/constants/globalStyles';
import { useUser } from '@/src/hooks/useUser';
import { Box } from '@/src/components/Box';
import { tokens } from '@/src/constants/tokens';
import { Octicons } from '@expo/vector-icons';
import { SectionHeader } from '@/src/components/SectionHeader';
import MembersItem from './components/MembersItem';
import { EmptyMembers } from './components/EmptyMembers';

const CONTAINER_HEIGHT: number = 120;

export default function Estate() {
  const { user, members } = useUser();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const OPTIONS = [
    {
      label: 'Total members',
      value: user?.default_estate?.total_members,
      route: '/view-members' as const,
    },
    {
      label: 'Amount generated',
      value: user?.default_estate?.amount_generated,
      route: '/view-finance' as const,
    },
    {
      label: 'Total executives',
      value: user?.default_estate?.total_executives,
      route: '/view-executives' as const,
    },
    {
      label: 'Ongoing projects',
      value: user?.default_estate?.number_of_projects,
      route: '/project' as const,
    },
  ];

  const renderHeader = () => (
    <Box>
      <Typography paddingTop={8} variant="headingSemiBold24">
        {user.default_estate.name || ''}
      </Typography>
      <Typography paddingTop={8} variant="bodyMedium16" color="darkGray">
        {user?.default_estate?.name || ''},{' '}
        {user?.default_estate?.address || ''}
      </Typography>
      <Typography paddingTop={8} variant="bodyMedium16" color="darkGray">
        {user?.default_estate?.area || ''}, {user?.default_estate?.state || ''}{' '}
        • {user?.default_estate?.number_of_occupants || ''} occupants
      </Typography>
      <Box marginTop={24} backgroundColor="lightGray" style={[styles.image]}>
        <Image
          source={{
            uri: user?.default_estate?.image?.trim()
              ? user.default_estate.image
              : 'https://plus.unsplash.com/premium_photo-1733342586521-6d04831831bd?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          contentFit="cover"
          cachePolicy="memory-disk"
          style={styles.image}
        />
      </Box>

      <Typography color="darkGray" paddingTop={32} variant="bodyMedium16">
        Analysis
      </Typography>

      <Box style={styles.grid}>
        {OPTIONS.map(({ label, value, route }) => (
          <TouchableOpacity
            key={label}
            style={[
              styles.optionBox,
              selectedOption === label && styles.optionBoxSelected,
            ]}
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => {
              setSelectedOption(label);
              router.navigate({
                pathname: route,
                params: { estateId: user?.default_estate?.id || '' },
              });
            }}
          >
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              style={{ width: '100%' }}
            >
              <Typography
                color={selectedOption === label ? 'primary' : 'darkGray'}
                variant="bodyMedium16"
              >
                {label || ''}
              </Typography>
              <Octicons
                name="chevron-right"
                size={15}
                color={
                  selectedOption === label
                    ? tokens.colors.primary
                    : tokens.colors.darkGray
                }
              />
            </Box>

            <Typography
              variant="headingSemiBold24"
              color={selectedOption === label ? 'primary' : 'black'}
              paddingTop={8}
            >
              {value || '0'}
            </Typography>
          </TouchableOpacity>
        ))}
      </Box>

      <Box paddingY={32}>
        <SectionHeader
          leftTitle={`All members (${members.length})`}
          rightTitle="See all"
          onPress={() => router.navigate('/view-members')}
        />
      </Box>
    </Box>
  );

  return (
    <SafeScreenView>
      <FlatList
        contentContainerStyle={globalStyles.containerScroll}
        ListHeaderComponent={renderHeader}
        data={members.slice(0, 5)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MembersItem
            member={item}
            onPress={() =>
              router.navigate({
                pathname: '/view-a-single-member',
                params: { id: item.id },
              })
            }
          />
        )}
        ListEmptyComponent={() => (
          <EmptyMembers onPress={() => router.navigate('/invite-members')} />
        )}
      />
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: tokens.borderRadius['20'],
    height: CONTAINER_HEIGHT,
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: tokens.spacing[12],
    paddingTop: tokens.spacing[16],
  },
  optionBox: {
    backgroundColor: tokens.colors.white,
    padding: tokens.spacing[16],
    borderRadius: tokens.borderRadius['12'],
    borderWidth: tokens.borderWidth.normal,
    borderColor: tokens.colors.lightGray,
    width: '47%',
  },
  optionBoxSelected: {
    backgroundColor: tokens.colors.primaryLight,
    borderColor: tokens.colors.primary,
    borderWidth: tokens.borderWidth.normal,
  },
});
