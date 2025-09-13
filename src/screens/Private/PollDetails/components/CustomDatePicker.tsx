import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type CalendarTheme = {
  selectedDayBackgroundColor: string;
  todayTextColor: string;
};

type TProps = {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
};

export const CalendarPicker = ({ selectedDate, onSelectDate }: TProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDate) {
      setSelected(dayjs(selectedDate).format('YYYY-MM-DD'));
    } else {
      setSelected(null);
    }
  }, [selectedDate]);

  const onDayPress = (day: DateData) => {
    setSelected(day.dateString);
    onSelectDate(dayjs(day.dateString).toDate());
    setIsOpen(false);
  };

  const markedDates = selected
    ? {
        [selected]: {
          selected: true,
          selectedColor: tokens.colors.primary,
          selectedTextColor: tokens.colors.white,
        },
      }
    : {};

  const calendarTheme: CalendarTheme & { arrowColor: string } = {
    selectedDayBackgroundColor: tokens.colors.primary,
    todayTextColor: tokens.colors.primary,
    arrowColor: tokens.colors.primary,
  };

  return (
    <Box>
      <Typography paddingBottom={8} variant="bodyRegular14" color="darkGray">
        Start Date
      </Typography>
      <Pressable style={styles.row} onPress={() => setIsOpen((prev) => !prev)}>
        <Typography
          style={{ marginRight: tokens.spacing[32] }}
          color={!selected ? 'gray' : 'black'}
        >
          {selected
            ? dayjs(selected).format('MMM D, YYYY')
            : 'Select Start Date'}
        </Typography>
        <Feather name="calendar" size={20} color={tokens.colors.darkGray} />
      </Pressable>

      {isOpen && (
        <Box marginTop={16}>
          <Calendar
            markedDates={markedDates}
            onDayPress={onDayPress}
            theme={calendarTheme}
          />
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  row: {
    borderColor: tokens.colors.lighterGray,
    borderRadius: tokens.borderRadius[8],
    borderWidth: tokens.borderWidth.normal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: tokens.spacing[16],
    paddingLeft: tokens.spacing[14],
    paddingRight: tokens.spacing[16] + 2,
    paddingVertical: tokens.spacing[16] + 2,
  },
});
