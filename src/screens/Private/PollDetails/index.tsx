import { useLocalSearchParams, router } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, Switch } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

import { CalendarPicker } from './components/CustomDatePicker';
import { PollDuration } from './components/PollDuration';
import { PollResponses } from './components/PollResponses';
import { PollTabs, TabType } from './components/PollTabs';
import { parseSelectedPollParam } from './helpers/parseParams';

export type TResponseOption = { id: string; value: string };

export type TPollTemplate = {
  id: string;
  title: string;
  logo: 'calendar' | 'Safety' | 'bulb1' | 'gift' | '';
  question: string;
  responseOptions: TResponseOption[];
  duration: string;
  description: string;
  allowUsersSeePollVoters: boolean;
  voterEligibity: 'residence' | 'excos only' | '';
  voteRequired: number;
  startDate: string;
};

export default function PollDetails() {
  const { selectedPoll } = useLocalSearchParams<{ selectedPoll?: string }>();
  const [poll, setPoll] = useState<TPollTemplate | null>(null);
  const [activeTab, setTab] = useState<TabType>('Residence');

  useEffect(() => {
    const { poll, tab } = parseSelectedPollParam(selectedPoll);
    setPoll(poll);
    setTab(tab);
  }, [selectedPoll]);

  const updatePoll = (updates: Partial<TPollTemplate>) => {
    if (!poll) return;
    setPoll({ ...poll, ...updates });
  };

  const handlePress = useCallback(() => {
    router.replace('/create-poll-success');
  }, []);

  const isFormValid = useMemo(() => {
    if (!poll) return false;

    const filledResponses = poll.responseOptions.filter(
      (r) => r.value.trim().length > 0
    );
    const hasStartDate =
      !!poll.startDate && !isNaN(new Date(poll.startDate).getTime());

    return (
      poll.title.trim().length > 0 &&
      poll.description.trim().length > 0 &&
      hasStartDate &&
      poll.duration.trim().length > 0 &&
      filledResponses.length >= 2
    );
  }, [poll]);

  if (!poll) return null;

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography paddingTop={24} variant="headingSemiBold24">
          Create new poll
        </Typography>
        <Typography
          variant="bodyMedium16"
          color="darkGray"
          paddingTop={8}
          paddingBottom={40}
        >
          Create poll and allow others vote
        </Typography>

        <PollTabs activeTab={activeTab} setTab={setTab} />

        <TextInput
          label="Poll title"
          placeholder="Title"
          value={poll.title}
          onChangeText={(text) => updatePoll({ title: text })}
        />
        <TextInput
          label="Ask a question (optional)"
          placeholder="Questions"
          value={poll.question}
          onChangeText={(text) => updatePoll({ question: text })}
        />

        <PollResponses poll={poll} updatePoll={updatePoll} />

        <CalendarPicker
          selectedDate={poll.startDate ? new Date(poll.startDate) : null}
          onSelectDate={(date) => updatePoll({ startDate: date.toISOString() })}
        />

        <PollDuration
          selectedDuration={poll.duration}
          setDuration={(duration) => updatePoll({ duration })}
        />

        <TextInput
          label="Note"
          multiline
          placeholder="Write something about the poll"
          value={poll.description}
          onChangeText={(text) => updatePoll({ description: text })}
          height={tokens.spacing[80]}
          style={{ paddingTop: tokens.spacing[16] + 2 }}
        />

        <Box
          marginTop={8}
          marginBottom={32}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Allow users see poll voters</Typography>
          <Switch
            trackColor={{
              false: tokens.colors.gray,
              true: tokens.colors.primary,
            }}
            thumbColor={tokens.colors.white}
            ios_backgroundColor={tokens.colors.gray}
            onValueChange={() =>
              updatePoll({
                allowUsersSeePollVoters: !poll.allowUsersSeePollVoters,
              })
            }
            value={poll.allowUsersSeePollVoters}
          />
        </Box>

        <Button
          title="Create poll"
          disabled={!isFormValid}
          style={{ marginBottom: 32 }}
          onPress={handlePress}
        />
      </ScrollView>
    </SafeScreenView>
  );
}
