import React, { useMemo, useState } from 'react';
import { FlatList} from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import {
  globalStyles,
} from '@/src/constants/globalStyles';
import { useUser } from '@/src/hooks/useUser';

import { Box } from '@/src/components/Box';
import { tokens } from '@/src/constants/tokens';

import { TextInput } from '@/src/components/TextInput';
import { Feather } from '@expo/vector-icons';
import MembersItem from '../Estate/components/MembersItem';
import { EmptyMembers } from '../Estate/components/EmptyMembers';

export default function Viewexcutives() {
  const { estateId } = useLocalSearchParams();
  const { executives } = useUser();
  const [query, setQuery] = useState('');
  const navigation = useNavigation();

  const filteredExecutives = useMemo(() => {
    const search = query.toLowerCase();
    return executives.filter(
      (e) =>
        e.first_name.toLowerCase().includes(search) ||
        e.last_name.toLowerCase().includes(search)
    );
  }, [executives, query]);


  const renderHeader = () => (
    <Box paddingTop={12}>
      <Typography variant="headingSemiBold24" paddingBottom={12}>
        Executives
      </Typography>
      <TextInput
        placeholder="Search executives..."
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
        data={filteredExecutives}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => <MembersItem member={item} />}
        ListEmptyComponent={() => <EmptyMembers executive paddingTop={80} />}
      />
    </SafeScreenView>
  );
}
