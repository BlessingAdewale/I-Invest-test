import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { formatCurrency } from './formatCurrency';

export const ProjectFormState = () => {
  const { project } = useLocalSearchParams();
  const selectedProject = project ? JSON.parse(project as string) : null;
  if (!selectedProject) throw new Error('selectedProject is null');

  const [title, setTitle] = useState(selectedProject.title || '');
  const [description, setDescription] = useState(
    selectedProject.description || ''
  );
  const [amount, setAmount] = useState(() => {
    const raw = selectedProject.amount_to_contribute || '';
    const cleaned = raw.replace(/[^\d.]/g, '');
    return formatCurrency(cleaned);
  });

  const [saveAsTemplate, setSaveAsTemplate] = useState(false);
  const [startDate, setStartDate] = useState(
    selectedProject?.start_date !== undefined ? selectedProject.start_date : ''
  );

  const [deadline, setDeadline] = useState(
    selectedProject?.project_deadline !== undefined
      ? selectedProject.project_deadline
      : ''
  );

  const PER_RESIDENCE_TAB = 'Per residence';
  const TOTAL_BUDGET_TAB = 'Total budget';
  const [activeTab, setTab] = useState(
    selectedProject.payment_mode === 'total budget'
      ? TOTAL_BUDGET_TAB
      : PER_RESIDENCE_TAB
  );

  const [selectedPeriod, setSelectedPeriod] = useState(
    selectedProject.recurrence
  );
  const [isEnabled, setIsEnabled] = useState(
    selectedProject.stop_funding_once_target_is_reached || false
  );
  const PERIOD_OPTIONS = [
    'One-time',
    'Weekly',
    'Monthly',
    'Bi-annual',
    'Quarterly',
    'Yearly',
  ];

  const toggleSwitch = () => setIsEnabled((prev: boolean) => !prev);

  const isValidDate = (date: string) => !isNaN(Date.parse(date));

  const isStartDateValid = isValidDate(startDate);
  const isDeadlineValid = isValidDate(deadline);

  const isAmountValid = parseFloat(amount.replace(/[^0-9.]/g, '')) > 0;
  const isTemplate = selectedProject.title === '';
  const isFormValid =
    title.trim().length > 0 &&
    description.trim().length > 0 &&
    startDate.trim().length > 0 &&
    deadline.trim().length > 0 &&
    isStartDateValid &&
    isDeadlineValid &&
    isAmountValid &&
    (!isTemplate || saveAsTemplate);

  return {
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
    isStartDateValid,
    isDeadlineValid,
    isFormValid,
    PER_RESIDENCE_TAB,
    TOTAL_BUDGET_TAB,
    PERIOD_OPTIONS,
  };
};
