import { ScrollView } from 'react-native';

import { SawToothIcon } from '@/assets/svgs/SawToothIcon';
import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

const data = {
  id: '1',
  first_name: 'Blessing',
  last_name: 'Adeleke',
  date: '12 March, 2025',
  time: '21:56',
  amount: '150,000',
  payment_type: 'debit',
  purpose: 'Estate Monthly Fees',
  outstanding_fees: '$0',
  balance_due: '$0',
  status: 'Completed',
};
export default function ViewTransaction() {
  const mode = data?.payment_type === 'debit' || '' ? 'spent' : 'received';
  const full_name = ` ${data?.first_name || ''} ${data?.last_name || ''}`;
  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography
          paddingBottom={8}
          variant="headingSemiBold24"
          paddingTop={24}
        >
          {full_name}
        </Typography>
        <Typography paddingBottom={20} variant="bodyMedium16" color="darkGray">
          {data.date || ''} at {data.time || ''}{' '}
        </Typography>
        <Box
          backgroundColor="extraLightGray"
          style={{
            borderRadius: tokens.borderRadius[12],
          }}
        >
          <Box justifyContent="center" alignItems="center" paddingY={24}>
            <Typography
              variant="headlineBold48"
              paddingBottom={20}
              color="black"
            >
              ${data.amount || ''}
            </Typography>
            <Typography variant="bodyMedium16" color="darkGray">
              Amount {mode || ''}
            </Typography>
          </Box>
        </Box>
        <Box
          backgroundColor="extraLightGray"
          style={{
            borderRadius: tokens.borderRadius[12],
            marginTop: tokens.spacing[4] - 1,
          }}
        >
          <Box padding={16}>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom={20}
            >
              <Typography variant="bodyRegular16" color="darkGray">
                Purpose
              </Typography>
              <Typography variant="bodyMedium16" color="black">
                {data.purpose || ''}
              </Typography>
            </Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom={20}
            >
              <Typography variant="bodyRegular16" color="darkGray">
                Date received
              </Typography>
              <Typography variant="bodyMedium16" color="black">
                {data.date || ''}
              </Typography>
            </Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom={20}
            >
              <Typography variant="bodyRegular16" color="darkGray">
                Outstanding fees
              </Typography>
              <Typography variant="bodyMedium16" color="black">
                {data.outstanding_fees || ''}
              </Typography>
            </Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom={20}
            >
              <Typography variant="bodyRegular16" color="darkGray">
                Balance Due
              </Typography>
              <Typography variant="bodyMedium16" color="black">
                {data.balance_due || ''}
              </Typography>
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              <Typography variant="bodyRegular16" color="darkGray">
                status
              </Typography>
              <Typography variant="bodyMedium16" color="black">
                {data.status || ''}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            borderRadius: tokens.borderRadius[12],
            marginTop: tokens.spacing[4] - 1,
          }}
        >
          <Box flex={1}>
            <SawToothIcon />
          </Box>
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}
