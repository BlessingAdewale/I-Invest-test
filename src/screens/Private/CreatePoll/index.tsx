import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView } from 'react-native';

import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

import { styles } from './components/helpers/styles';

type TAntDesignIconName = 'calendar' | 'Safety' | 'bulb1' | 'gift' | 'plus';

export type TPollTemplate = {
  id: string;
  title: string;
  logo: TAntDesignIconName;
  question: string;
  responseOptions: string[];
  duration: string;
  description: string;
  allowUsersSeePollVoters: boolean;
  voterEligibity: 'residence' | 'excos only' | '';
  voteRequired: number;
  startDate: string;
};

const POLL_TEMPLATES: TPollTemplate[] = [
  {
    id: '1',
    title: '',
    logo: 'plus',
    question: '',
    responseOptions: [],
    duration: '',
    description: '',
    allowUsersSeePollVoters: false,
    voterEligibity: '',
    voteRequired: 0,
    startDate: '',
  },
  {
    id: '2',
    title: 'Meeting Time Poll',
    logo: 'calendar',
    question: 'When should we hold our next estate meeting?',
    responseOptions: ['Friday 10am', 'Saturday 3pm', 'Sunday 2pm'],
    duration: '24 hours',
    description: 'Vote for the most convenient time for everyone.',
    allowUsersSeePollVoters: true,
    voterEligibity: 'residence',
    voteRequired: 10,
    startDate: '2025-06-12T00:00:00.000Z',
  },
  {
    id: '3',
    title: 'Security Provider Selection',
    logo: 'Safety',
    question: 'Which security company should we hire?',
    responseOptions: ['SecureTech', 'WatchGuard', 'SafeZone'],
    duration: '1 week',
    description: 'Help us choose the best option.',
    allowUsersSeePollVoters: false,
    voterEligibity: 'excos only',
    voteRequired: 10,
    startDate: '2025-06-12T00:00:00.000Z',
  },
  {
    id: '4',
    title: 'Street Light Color',
    logo: 'bulb1',
    question: 'What color should the new LED streetlights be?',
    responseOptions: ['Warm White', 'Cool White', 'Yellow'],
    duration: '12 hours',
    description: 'Let’s make the estate glow better!',
    allowUsersSeePollVoters: false,
    voterEligibity: 'excos only',
    voteRequired: 20,
    startDate: '2025-06-12T00:00:00.000Z',
  },
  {
    id: '5',
    title: 'End of Year Celebration Theme',
    logo: 'gift',
    question: 'Choose the theme for the party',
    responseOptions: ['Masquerade', 'Retro', 'Formal'],
    duration: '3 days',
    description: 'Set the vibe for the party!',
    allowUsersSeePollVoters: true,
    voterEligibity: 'residence',
    voteRequired: 5,
    startDate: '2025-06-12T00:00:00.000Z',
  },
];

export default function CreatePoll() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handlePress = useCallback(
    (poll: TPollTemplate) => {
      setSelectedId(poll.id); // highlight selected card
      router.navigate({
        pathname: '/poll-details',
        params: { selectedPoll: JSON.stringify(poll) },
      });
    },
    [router]
  );

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography paddingTop={24} variant="headingSemiBold24">
          Choose poll template
        </Typography>
        <Typography paddingTop={8} variant="bodyMedium16" color="darkGray">
          Choose from a template or create a new poll from scratch
        </Typography>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          paddingTop={16}
          style={{ flexWrap: 'wrap' }}
        >
          {POLL_TEMPLATES.map((poll) => (
            <Pressable
              key={poll.id}
              onPress={() => handlePress(poll)}
              style={[
                styles.pollOption,
                selectedId === poll.id && styles.pollOptionSelected,
              ]}
            >
              <AntDesign
                name={poll.logo ? poll.logo : 'plus'}
                size={24}
                color={tokens.colors.black}
                style={{ marginBottom: 60 }}
              />
              <Typography
                color={selectedId === poll.id ? 'primary' : 'black'}
                variant={
                  selectedId === poll.id ? 'emphasisBold18' : 'subtitleMedium18'
                }
                textAlign="left"
                paddingTop={8}
                paddingBottom={8}
              >
                {poll.title || 'Create new poll'}
              </Typography>

              {!!poll.voterEligibity && (
                <Typography color="black" variant="bodyRegular14">
                  {poll.voteRequired} votes / {poll.voterEligibity}
                </Typography>
              )}
            </Pressable>
          ))}
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}
