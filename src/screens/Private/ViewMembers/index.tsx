import React, { useLayoutEffect, useMemo, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';

import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import {
  ACTIVE_OPACITY,
  globalStyles,
  PADDING_HORIZONTAL,
} from '@/src/constants/globalStyles';
import { useUser } from '@/src/hooks/useUser';

import { Box } from '@/src/components/Box';
import { tokens } from '@/src/constants/tokens';
import MembersItem from '../Estate/components/MembersItem';
import { TextInput } from '@/src/components/TextInput';
import { Feather } from '@expo/vector-icons';
import { EmptyMembers } from '../Estate/components/EmptyMembers';

export default function ViewMembers() {
  const { estateId } = useLocalSearchParams();
  const { members } = useUser();
  const [query, setQuery] = useState('');
  const navigation = useNavigation();

  const filteredMembers = useMemo(() => {
    const search = query.toLowerCase();
    return members.filter(
      (m) =>
        m.first_name.toLowerCase().includes(search) ||
        m.last_name.toLowerCase().includes(search)
    );
  }, [members, query]);

  // 🧭 Setup headerRight
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          onPress={() => {
            console.log('Add member');
            router.navigate('/invite-members');
          }}
          style={[globalStyles.rowStart, { paddingRight: PADDING_HORIZONTAL }]}
        >
          <Feather name="user-plus" size={20} color={tokens.colors.primary} />
          <Typography color="primary" paddingLeft={8} variant="bodyRegular14">
            Invite
          </Typography>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderHeader = () => (
    <Box paddingTop={12}>
      <Typography variant="headingSemiBold24" paddingBottom={12}>
        Members
      </Typography>
      <TextInput
        placeholder="Search member..."
        value={query}
        onChangeText={setQuery}
        iconLeft={
          <Feather name="search" size={18} color={tokens.colors.gray} />
        }
      />
    </Box>
  );

  return (
    <SafeScreenView edges={['bottom', 'right', 'left']}>
      <FlatList
        contentContainerStyle={globalStyles.containerScroll}
        data={filteredMembers}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
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
