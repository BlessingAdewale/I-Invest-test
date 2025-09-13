import { AntDesign } from '@expo/vector-icons';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

import { RangeCalendarPicker } from './CustomDateRangePicker';
import { ProjectDropdown } from './ProjectsDropDown';

const PERIOD_OPTIONS = [
  'Last 7 days',
  '2 weeks',
  '1 month',
  '3 months',
  '6 months',
  '1 year',
];

type TAllTransactionBottomSheetProps = {
  closeSheet: () => void;
};

export const AllTransactionBottomSheet = ({
  closeSheet,
}: TAllTransactionBottomSheetProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [, setFilter] = useState({});

  const PROJECT_OPTIONS = ['Project A', 'Project B', 'Project C'];

  const amountError =
    minAmount.trim() &&
    maxAmount.trim() &&
    !isNaN(Number(minAmount)) &&
    !isNaN(Number(maxAmount)) &&
    Number(minAmount) > Number(maxAmount)
      ? 'Min amount must be less than or equal to Max amount.'
      : '';

  return (
    <BottomSheetScrollView style={styles.container}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingTop={20}
      >
        <Typography variant="headingSemiBold24">Sort Transactions</Typography>
        <AntDesign
          name="close"
          size={24}
          color={tokens.colors.gray}
          onPress={closeSheet}
        />
      </Box>

      <Box marginTop={24}>
        <Typography variant="bodyRegular14" color="darkGray" marginBottom={12}>
          Period
        </Typography>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          style={styles.gridContainer}
        >
          {PERIOD_OPTIONS.map((period) => {
            const isSelected = selectedPeriod === period;
            return (
              <Pressable
                key={period}
                onPress={() => setSelectedPeriod(period)}
                style={[
                  styles.periodOption,
                  isSelected && styles.periodOptionSelected,
                ]}
              >
                <Typography
                  variant="bodyMedium16"
                  color={isSelected ? 'primary' : 'darkGray'}
                >
                  {period}
                </Typography>
              </Pressable>
            );
          })}
        </Box>

        <Typography
          variant="bodyRegular14"
          color="darkGray"
          marginTop={24}
          marginBottom={8}
        >
          Projects
        </Typography>
        <ProjectDropdown
          projects={PROJECT_OPTIONS}
          selectedProject={selectedProject}
          onSelect={setSelectedProject}
        />

        <Typography variant="bodyRegular14" color="darkGray" marginTop={24}>
          Custom date
        </Typography>
        <RangeCalendarPicker
          fromDate={fromDate}
          toDate={toDate}
          onSelectRange={(from, to) => {
            setFromDate(from);
            setToDate(to);
          }}
        />

        <Typography variant="bodyRegular14" color="darkGray" marginTop={12}>
          Amount
        </Typography>
        <Box flexDirection="row" justifyContent="space-between" marginTop={10}>
          <Box flex={1} marginRight={8}>
            <TextInput
              placeholder="Min"
              value={minAmount}
              onChangeText={setMinAmount}
              keyboardType="numeric"
              wrapperWidth="100%"
            />
          </Box>
          <Box flex={1} marginRight={8}>
            <TextInput
              placeholder="Max"
              value={maxAmount}
              onChangeText={setMaxAmount}
              keyboardType="numeric"
              wrapperWidth="100%"
            />
          </Box>
        </Box>
        {amountError ? (
          <Typography variant="bodyRegular12" color="red" marginTop={4}>
            {amountError}
          </Typography>
        ) : null}
      </Box>

      <Box
        style={{
          marginBottom: tokens.spacing['24'] + 4,
        }}
      >
        <Button
          title="Apply Settings"
          onPress={() => {
            setFilter({
              period: selectedPeriod!,
              project: selectedProject!,
              fromDate,
              toDate,
              minAmount: Number(minAmount),
              maxAmount: Number(maxAmount),
            });
            closeSheet();
          }}
          style={{
            marginBottom: tokens.spacing[16] + 4,
          }}
          disabled={
            !selectedPeriod ||
            !selectedProject ||
            !fromDate ||
            !toDate ||
            !minAmount.trim() ||
            !maxAmount.trim() ||
            isNaN(Number(minAmount)) ||
            isNaN(Number(maxAmount)) ||
            Number(minAmount) > Number(maxAmount)
          }
        />
        <Button title="Cancel" outlined onPress={closeSheet} />
      </Box>
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: tokens.spacing['24'],
    paddingHorizontal: tokens.spacing['16'],
    paddingTop: tokens.spacing['8'],
  },
  gridContainer: {
    flexWrap: 'wrap',
  },
  periodOption: {
    borderColor: tokens.colors.lightGray,
    borderRadius: tokens.borderRadius[32],
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  periodOptionSelected: {
    backgroundColor: tokens.colors.primaryLight,
    borderColor: tokens.colors.primary,
  },
});
