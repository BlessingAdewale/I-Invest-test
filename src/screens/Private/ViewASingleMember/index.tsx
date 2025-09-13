import { ScrollView } from 'react-native';

import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { useUser } from '@/src/hooks/useUser';
import { BankingInfoAndPayment } from '../Home/components/BankingInfoAndPayment';
import { Box } from '@/src/components/Box';
import { Feather } from '@expo/vector-icons';
import { tokens } from '@/src/constants/tokens';

export default function ViewASingleMember() {
  const { isAdmin } = useUser();
  const data = {
    first_name: 'Damilola',
    last_name: 'Adekeye',
    address: 'House B24',
    email_address: 'adekeye@gmail.com',
    phone_number: '+234 8169036632',
    joined: '12, October, 2025',
  };

  return (
    <SafeScreenView edges={['bottom', 'right', 'left']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Box paddingY={24}>
          <Typography variant="headingSemiBold24">
            {data?.last_name || ''}
            {data?.first_name || ''}
          </Typography>
          <Typography paddingTop={8} color="darkGray">
            {data?.address || ''}
          </Typography>
          <BankingInfoAndPayment
            iconLeft={
              <Feather name="user-plus" size={20} color={tokens.colors.black} />
            }
            text={isAdmin() ? 'Remove from role' : 'Assign an executive role'}
            onPress={() => {}}
          />
        </Box>

        <Box paddingBottom={24}>
          <Typography
            paddingBottom={4}
            variant="bodyRegular14"
            color="darkGray"
          >
            Email Address
          </Typography>
          <Typography variant="subtitleMedium18">
            {data?.email_address || ''}
          </Typography>
        </Box>
        <Box paddingBottom={24}>
          <Typography
            paddingBottom={4}
            variant="bodyRegular14"
            color="darkGray"
          >
            Phone Number
          </Typography>
          <Typography variant="subtitleMedium18">
            {data?.phone_number || ''}
          </Typography>
        </Box>
        <Box paddingBottom={24}>
          <Typography
            paddingBottom={4}
            variant="bodyRegular14"
            color="darkGray"
          >
            Joined
          </Typography>
          <Typography variant="subtitleMedium18">
            {data?.joined || ''}
          </Typography>
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}
