import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';
import { usePollData } from '@/src/hooks/usePollData';

import { PollOptions } from './components/PollOptions';
import { EmptyPollCard } from '../Polls/components/EmptyPollCard';
import { StyleSheet } from 'react-native';

export default function ViewPoll() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const {
    poll,
    responses,
    selectedIndex,
    handleVote,
    totalVotes,
    hasVoted,
    isCompleted,
    timeLeft,
    voterProfiles,
  } = usePollData(id);

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography
          paddingTop={24}
          paddingBottom={8}
          variant="headingSemiBold24"
          color="black"
        >
          {poll?.question ?? 'Loading...'}
        </Typography>
        <Typography variant="bodyMedium16" color="darkGray" marginBottom={24}>
          {isCompleted ? 'Poll has ended' : 'You can only vote once'}
        </Typography>

        <PollOptions
          responses={responses}
          selectedIndex={selectedIndex}
          hasVoted={hasVoted}
          handleVote={handleVote}
          isCompleted={isCompleted}
          totalVotes={totalVotes}
        />

        <Box
          flexDirection="row"
          alignItems="center"
          padding={10}
          marginTop={16}
          gap={8}
          backgroundColor='secondary'
          style={{
            borderRadius: tokens.borderRadius[12],
          }}
        >
          <Typography variant="bodyRegular14" color="white">
            {totalVotes} votes
          </Typography>
          <Typography variant="bodyRegular14" color="secondaryDark">
            •
          </Typography>
          <Typography variant="bodyRegular14" color="white">
            {timeLeft}
          </Typography>
        </Box>

        {voterProfiles.length > 0 ? (
          <Box marginTop={24}>
            <Typography color="gray" variant="bodyMedium16" marginBottom={8}>
              Voters
            </Typography>
            <Box gap={8}>
              {voterProfiles.map((voter) => (
                <Box
                  key={voter.id}
                  flexDirection="row"
                  alignItems="center"
                  gap={16}
                >
                  <Box
                    style={styles.wrapper}
                  ></Box>
                  <Box>
                    <Typography variant="subtitleMedium18" color="black">
                      {voter.first_name} {voter.last_name}
                    </Typography>
                    <Typography variant="bodyRegular14" color="darkGray">
                      {voter.role}
                      {voter.unit ? ` ${voter.unit}` : ''}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box marginTop={80}>
            <EmptyPollCard />
          </Box>
        )}
      </ScrollView>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    width: 48,
    height: 48,
    borderRadius: tokens.borderRadius.circle,
    overflow: 'hidden',
    backgroundColor: tokens.colors.lighterGray,
  }
})