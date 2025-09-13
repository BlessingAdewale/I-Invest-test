import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { Fragment, useCallback } from 'react';
import { Pressable, SectionList, StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles, IMAGE_SIZE } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';
import { useUser } from '@/src/hooks/useUser';

import { EmptyPollCard } from './components/EmptyPollCard';
import { PollCardItem } from './components/PollCardItem';

export default function Poll() {
  const { runningPolls, completedPolls, getProjectsLength } = useUser();
  const isEmpty = getProjectsLength === 0;
  const sections = [
    {
      title: 'Running Polls',
      data: runningPolls,
    },
    {
      title: 'Polls history',
      data: completedPolls,
    },
  ].filter((section) => section.data.length > 0);

  const handleNavigateToPoll = useCallback((id: string) => {
    router.navigate({
      pathname: '/view-poll',
      params: { id },
    });
  }, []);

  const handleNavigateToCreatePoll = useCallback(() => {
    router.navigate('/create-poll');
  }, []);

  return (
    <SafeScreenView>
      <SectionList
        sections={isEmpty ? [] : sections}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.containerScroll}
        renderItem={({ item, index }) => (
          <Box paddingTop={index === 0 ? 0 : 10} paddingBottom={10}>
            <PollCardItem
              item={item}
              onPress={
                () => handleNavigateToPoll(item.id)
              }
            />
          </Box>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Box paddingY={16}>
            <Typography variant="bodyMedium16" color="darkGray">
              {title}
            </Typography>
          </Box>
        )}
        ListEmptyComponent={
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            marginTop={64}
          >
            <EmptyPollCard />
          </Box>
        }
        ListHeaderComponent={
          <Fragment>
            <Typography
              color="black"
              paddingTop={16}
              variant="headingSemiBold24"
            >
              Poll
            </Typography>
            <Typography
              variant="bodyMedium16"
              color="darkGray"
              paddingTop={8}
              paddingBottom={24}
            >
              Make decision easier using votes
            </Typography>
          </Fragment>
        }
      />

      {/* Floating Plus Button */}
      <Box style={styles.floatingWrapper}>
        <Pressable onPress={handleNavigateToCreatePoll}>
          <Box
            alignItems="center"
            justifyContent="center"
            backgroundColor="primary"
            style={styles.floatingWrapper2}
          >
            <AntDesign name="plus" size={24} color={tokens.colors.white} />
          </Box>
        </Pressable>
      </Box>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  floatingWrapper: {
    position: 'absolute',
    bottom: tokens.spacing[24],
    right: tokens.spacing[24],
  },
  floatingWrapper2: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: tokens.borderRadius.full,
  },
});
