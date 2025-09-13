import dayjs from 'dayjs';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { ScrollView } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import { Checkbox } from '@/src/components/Checkbox';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

import { CurrencyInput } from './components/CurrencyInput';
import { CalendarPicker } from './components/CustomDatePicker';
import { PaymentModeTabs } from './components/PaymentModeTabs';
import { PeriodSelection } from './components/PeriodSelection';
import { ProjectDetailsHeader } from './components/ProjectDetailsHeader';
import { StopFundingSwitch } from './components/StopFundingSwitch';
import { ProjectFormState } from './helpers/projectFormState';

export default function ProjectDetails() {
  const {
    selectedProject,
    title,
    setTitle,
    description,
    setDescription,
    amount,
    setAmount,
    saveAsTemplate,
    setSaveAsTemplate,
    startDate,
    setStartDate,
    deadline,
    setDeadline,
    activeTab,
    setTab,
    selectedPeriod,
    setSelectedPeriod,
    isEnabled,
    toggleSwitch,
    isFormValid,
    PER_RESIDENCE_TAB,
    TOTAL_BUDGET_TAB,
    PERIOD_OPTIONS,
  } = ProjectFormState();

  const handleCreateProject = useCallback(() => {
    const projectToSubmit = {
      ...selectedProject,
      title,
      description,
      start_date: startDate,
      project_deadline: deadline,
      recurrence: selectedPeriod,
      payment_mode:
        activeTab === TOTAL_BUDGET_TAB ? 'total budget' : 'per residence',
      stop_funding_once_target_is_reached: isEnabled,
      amount_to_contribute: amount,
    };
    //I-Invest API logic will go here later on
    console.log('Creating project:', projectToSubmit);
    router.replace('/create-project-success');
  }, [
    selectedProject,
    title,
    description,
    startDate,
    deadline,
    selectedPeriod,
    activeTab,
    TOTAL_BUDGET_TAB,
    isEnabled,
    amount,
  ]);

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <ProjectDetailsHeader />

        <Typography variant="bodyRegular14" color="darkGray">
          Project target
        </Typography>

        <Box flexDirection="row" paddingTop={12}>
          <Typography variant="subtitleMedium56" paddingRight={8}>
            $
          </Typography>
          <Box flex={1}>
            <CurrencyInput value={amount} onChange={setAmount} />
          </Box>
        </Box>

        <PaymentModeTabs
          activeTab={activeTab}
          onTabChange={setTab}
          PER_RESIDENCE_TAB={PER_RESIDENCE_TAB}
          TOTAL_BUDGET_TAB={TOTAL_BUDGET_TAB}
        />

        <TextInput
          label="Project title"
          placeholder="What are you planning for?"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          label="Description"
          multiline
          placeholder="Write something about this project"
          value={description}
          onChangeText={setDescription}
          height={80}
          style={{ paddingTop: tokens.spacing[16] + 2 }}
        />
        <CalendarPicker
          label="Start date"
          selectedDate={
            dayjs(startDate).isValid() ? new Date(startDate) : undefined
          }
          onSelectDate={(date) => setStartDate(date.toISOString())}
          placeholder={
            dayjs(startDate).isValid()
              ? dayjs(startDate).format('MMM D, YYYY')
              : 'Select start date'
          }
        />

        <CalendarPicker
          label="Deadline"
          selectedDate={
            dayjs(deadline).isValid() ? new Date(deadline) : undefined
          }
          onSelectDate={(date) => setDeadline(date.toISOString())}
          placeholder={
            dayjs(deadline).isValid()
              ? dayjs(deadline).format('MMM D, YYYY')
              : 'Select deadline'
          }
        />

        <PeriodSelection
          options={PERIOD_OPTIONS}
          selected={selectedPeriod}
          onSelect={setSelectedPeriod}
        />

        <StopFundingSwitch value={isEnabled} onToggle={toggleSwitch} />

        {!selectedProject.amount_to_contribute && (
          <Box marginBottom={20}>
            <Checkbox
              label="Save as template"
              shape="square"
              checked={saveAsTemplate}
              onChange={setSaveAsTemplate}
            />
          </Box>
        )}

        <Button
          title="Create project"
          disabled={!isFormValid}
          style={{ marginBottom: 32 }}
          onPress={handleCreateProject}
        />
      </ScrollView>
    </SafeScreenView>
  );
}
