import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { CalendarIcon } from '@/assets/svgs/CalendarIcon';
import { Box } from '@/src/components/Box';
import ProgressBar from '@/src/components/ProgressBar';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

export type TProject = {
  id: string;
  estate: string;
  title: string;
  created_by: string;
  description: string;
  target_amount: string;
  amount_raised: string;
  status: string;
  donation_type: 'EQUAL' | 'PERCENTAGE';
  start_date: string;
  end_date: string;
  is_recurring: boolean;
  created_at: string;
  recurrence_interval: null;
  people_paid_count: number; // ✅ new
  people_required_count: number; // ✅ new
};

type Props = {
  item: TProject;
  onPress?: () => void; // ✅ Optional onPress
  showPay?: boolean;
};

export const ProjectCardItem = ({ item, onPress, showPay = false }: Props) => {
  const targetAmount = parseFloat(item.target_amount);
  const amountRaised = parseFloat(item.amount_raised);
  const progress = targetAmount > 0 ? amountRaised / targetAmount : 0;

  const CardContent = (
    <Box
      backgroundColor="lighterGray"
      style={styles.cardContainer}
      padding={16}
      marginBottom={16}
    >
      <Box paddingBottom={12}>
        <CalendarIcon />
      </Box>
      <Box>
        <Typography variant="subtitleMedium18" color="black">
          {item.title}
        </Typography>
        {amountRaised <= targetAmount && (
          <Box paddingTop={12} marginRight={12}>
            <ProgressBar progress={progress} />
          </Box>
        )}
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingTop={12}
        >
          <Box flexDirection="row" alignItems="center">
            <Typography
              color="darkGray"
              variant="bodyRegular14"
              marginRight={2}
            >
              ₦{amountRaised.toLocaleString()}
            </Typography>
            <Typography color="darkGray" variant="emphasisBold18">
              / ₦{targetAmount.toLocaleString()}
            </Typography>
          </Box>

          {showPay && (
            <Box flexDirection="row" alignItems="center">
              <Typography
                color="darkGray"
                variant="bodyRegular12"
                marginRight={2}
              >
                {item.people_paid_count}
              </Typography>
              <Typography color="darkGray" variant="bodyRegular12">
                / {item.people_required_count}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );

  // ✅ Wrap with Pressable only if onPress is provided
  return onPress ? (
    <Pressable onPress={onPress}>{CardContent}</Pressable>
  ) : (
    CardContent
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: tokens.borderRadius[14],
  },
});
