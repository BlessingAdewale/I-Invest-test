import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type Range = {
  startDate: string;
  endDate: string;
};

type CalendarTheme = {
  selectedDayBackgroundColor: string;
  todayTextColor: string;
};

type TProps = {
  fromDate: Date;
  toDate: Date;
  onSelectRange: (from: Date, to: Date) => void;
};

export const RangeCalendarPicker = ({
  fromDate,
  toDate,
  onSelectRange,
}: TProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState<Range>({
    startDate: dayjs(fromDate).format('YYYY-MM-DD'),
    endDate: dayjs(toDate).format('YYYY-MM-DD'),
  });

  const onDayPress = (day: DateData) => {
    if (!range.startDate || (range.startDate && range.endDate)) {
      setRange({ startDate: day.dateString, endDate: '' });
    } else {
      const start = dayjs(range.startDate);
      const end = dayjs(day.dateString);
      if (end.isAfter(start)) {
        setRange({ startDate: range.startDate, endDate: day.dateString });
        onSelectRange(start.toDate(), end.toDate());
      } else {
        setRange({ startDate: day.dateString, endDate: '' });
      }
    }
  };

  const getMarkedDates = (): MarkedDates => {
    const marked: MarkedDates = {};

    if (range.startDate) {
      marked[range.startDate] = {
        startingDay: true,
        color: tokens.colors.primary,
        textColor: tokens.colors.white,
      };
    }

    if (range.endDate) {
      const start = dayjs(range.startDate);
      const end = dayjs(range.endDate);

      for (let d = start.add(1, 'day'); d.isBefore(end); d = d.add(1, 'day')) {
        marked[d.format('YYYY-MM-DD')] = {
          color: tokens.colors.primaryLight,
          textColor: tokens.colors.black,
        };
      }

      marked[range.endDate] = {
        endingDay: true,
        color: tokens.colors.primary,
        textColor: tokens.colors.white,
      };
    }

    return marked;
  };

  const calendarTheme: CalendarTheme & { arrowColor: string } = {
    selectedDayBackgroundColor: tokens.colors.primary,
    todayTextColor: tokens.colors.primary,
    arrowColor: tokens.colors.primary,
  };

  return (
    <Box>
      <Pressable style={styles.row} onPress={() => setIsOpen((prev) => !prev)}>
        <Feather name="calendar" size={20} color={tokens.colors.darkGray} />
        <Box flex={1} paddingLeft={12}>
          <Typography style={{ marginRight: tokens.spacing[32] }}>
            {dayjs(range.startDate).format('MMM D, YYYY')} -{' '}
            {range.endDate ? dayjs(range.endDate).format('MMM D, YYYY') : ''}
          </Typography>
        </Box>
      </Pressable>

      {isOpen && (
        <Box marginTop={16}>
          <Calendar
            markingType="period"
            markedDates={getMarkedDates()}
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
    alignItems: 'center',
    borderColor: tokens.colors.lightGray,
    borderRadius: tokens.borderRadius[8],
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: tokens.spacing['8'],
    paddingHorizontal: tokens.spacing[16],
    paddingVertical: tokens.spacing[12],
  },
});
