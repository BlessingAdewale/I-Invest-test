import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

type TAntDesignIconName = 'calendar' | 'Safety' | 'bulb1' | 'gift' | '';
// Add any other used icon names here

type TProjectOption = {
  id: string;
  title: string;
  logo: TAntDesignIconName;
  amount_to_contribute: string;
  project_target: string;
  payment_mode: string;
  description: string;
  start_date: string;
  project_deadline: string;
  recurrence: string;
  stop_funding_once_target_is_reached: boolean;
};

const PROJECT_OPTIONS: TProjectOption[] = [
  {
    id: '1',
    title: '',
    logo: '',
    amount_to_contribute: '',
    project_target: '',
    payment_mode: '',
    description: '',
    start_date: '',
    project_deadline: '',
    recurrence: '',
    stop_funding_once_target_is_reached: false,
  },
  {
    id: '2',
    title: 'Yearly Estate dues',
    logo: 'calendar',
    amount_to_contribute: '$1000',
    project_target: '$15,000',
    payment_mode: 'residence',
    description: 'AH dhdh udkee uuunej ididm sysyys',
    start_date: '2025-04-10T00:00:00.000Z',
    project_deadline: '2025-04-17T00:00:00.000Z',
    recurrence: 'Monthly',
    stop_funding_once_target_is_reached: true,
  },
  {
    id: '3',
    title: 'Garden makeover',
    logo: 'calendar',
    amount_to_contribute: '$500',
    project_target: '$10,000',
    payment_mode: 'residence',
    description: 'Enhance the community garden with new plants and benches.',
    start_date: '2025-05-01T00:00:00.000Z',
    project_deadline: '2025-05-30T00:00:00.000Z',
    recurrence: 'One-time',
    stop_funding_once_target_is_reached: true,
  },
  {
    id: '4',
    title: 'Water System Upgrade',
    logo: 'Safety',
    amount_to_contribute: '$200',
    project_target: '$20,000',
    payment_mode: 'property',
    description: 'Upgrade underground water piping and filtration.',
    start_date: '2025-06-05T00:00:00.000Z',
    project_deadline: '2025-07-05T00:00:00.000Z',
    recurrence: 'One-time',
    stop_funding_once_target_is_reached: true,
  },
  {
    id: '5',
    title: 'Street lighting installation',
    logo: 'bulb1',
    amount_to_contribute: '$15,000',
    project_target: '$15,000',
    payment_mode: 'total budget',
    description: 'Install modern LED street lights across all zones.',
    start_date: '2025-07-01T00:00:00.000Z',
    project_deadline: '2025-08-01T00:00:00.000Z',
    recurrence: 'One-time',
    stop_funding_once_target_is_reached: true,
  },
  {
    id: '6',
    title: 'Holiday decoration fund',
    logo: 'gift',
    amount_to_contribute: '$5,000',
    project_target: '$5,000',
    payment_mode: 'total budget',
    description: 'Funds for community-wide holiday decorations and events.',
    start_date: '2025-11-01T00:00:00.000Z',
    project_deadline: '2025-12-15T00:00:00.000Z',
    recurrence: 'Yearly',
    stop_funding_once_target_is_reached: true,
  },
];

export default function CreateProject() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const router = useRouter();

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography paddingTop={32} variant="headingSemiBold24">
          Choose template
        </Typography>
        <Typography paddingTop={8} variant="bodyMedium16" color="darkGray">
          Choose from a template or create an entirely new project from scratch
        </Typography>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          paddingTop={16}
          style={{ flexWrap: 'wrap' }}
        >
          {PROJECT_OPTIONS.map((project) => {
            const isSelected = selectedId === project.id;
            return (
              <Pressable
                key={project.id}
                onPress={() => {
                  setSelectedId(project.id);
                  router.navigate({
                    pathname: '/project-details',
                    params: {
                      project: JSON.stringify(project),
                    },
                  });
                }}
                style={[
                  styles.projectOption,
                  isSelected && styles.projectOptionSelected,
                ]}
              >
                <AntDesign
                  name={project.logo || 'plus'}
                  size={24}
                  color="black"
                />
                <Typography
                  color="black"
                  variant="subtitleMedium18"
                  style={[
                    styles.projectText,
                    isSelected && styles.projectTextSelected,
                  ]}
                >
                  {project.title || 'Create new project plan'}
                </Typography>
                {(project.amount_to_contribute || project.payment_mode) && (
                  <Typography color="black" variant="bodyRegular14">
                    {project.amount_to_contribute}
                    {project.amount_to_contribute && project.payment_mode
                      ? ' / '
                      : ''}
                    {project.payment_mode}
                  </Typography>
                )}
              </Pressable>
            );
          })}
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  projectOption: {
    backgroundColor: tokens.colors.lighterGray,
    borderColor: tokens.colors.transparent,
    borderRadius: tokens.borderRadius[24],
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 16,
    width: '48%',
  },
  projectOptionSelected: {
    backgroundColor: tokens.colors.primaryLight,
    borderColor: tokens.colors.primary,
  },
  projectText: {
    color: tokens.colors.black,
    paddingBottom: 8,
    paddingTop: 8,
    textAlign: 'left',
  },
  projectTextSelected: {
    color: tokens.colors.primary,
    fontWeight: '600',
  },
});
