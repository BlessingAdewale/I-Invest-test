import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import { Checkbox } from '@/src/components/Checkbox';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { transactionState } from '@/src/constants/recoil/recoilAtom';

import TransactionInitiatorHeader from './components/TransactionInitiatorHeader';

export default function TransactionInformation() {
  const transaction = useRecoilValue(transactionState);
  const [signed, setSigned] = useState(false);

  const signatories = [
    {
      id: '1',
      first_name: 'Seyi',
      last_name: 'Adekeye',
    },
    {
      id: '2',
      first_name: 'Ademola',
      last_name: 'Jokotoye',
    },
    {
      id: '3',
      first_name: 'Blessing',
      last_name: 'Adeleke',
    },
  ];

  const handlePress = () => {
    router.navigate('/verify-transaction');
  };

  return (
    <SafeScreenView>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography variant="headingSemiBold24">
          Transaction Information
        </Typography>

        <TransactionInitiatorHeader />

        <Typography paddingTop={32} variant="bodyRegular14" color="darkGray">
          Amount requested
        </Typography>
        <Typography paddingY={12} variant="bodyMedium56" paddingRight={8}>
          ${transaction.amount}
        </Typography>

        <Box>
          <Box>
            <Typography
              variant="bodyRegular14"
              color="darkGray"
              paddingTop={12}
              paddingBottom={8}
            >
              Funds from which project?
            </Typography>
            <Typography paddingBottom={20} variant="subtitleMedium18">
              {transaction.project}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="bodyRegular14"
              color="darkGray"
              paddingBottom={8}
            >
              Description
            </Typography>
            <Typography paddingBottom={20} variant="subtitleMedium18">
              {transaction.description}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="bodyRegular14"
              color="darkGray"
              paddingBottom={8}
            >
              Signatories
            </Typography>

            <Box marginBottom={40}>
              {signatories.map((signature) => (
                <Box key={signature.id} marginBottom={14}>
                  <Checkbox
                    label={`${signature.first_name} ${signature.last_name}`}
                    checked={true}
                    onChange={() => {}}
                  />
                </Box>
              ))}

              <Checkbox label="You" checked={signed} onChange={setSigned} />
            </Box>
          </Box>
        </Box>

        <Button
          title="Approve transaction"
          onPress={handlePress}
          disabled={!signed}
        />
      </ScrollView>
    </SafeScreenView>
  );
}
