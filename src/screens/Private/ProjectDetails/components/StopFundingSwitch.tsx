import { Switch } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type TStopFundingSwitch = {
  value: boolean;
  onToggle: () => void;
};

export const StopFundingSwitch = ({ value, onToggle }: TStopFundingSwitch) => (
  <Box
    marginTop={24}
    marginBottom={32}
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <Typography>Stop funding once target is reached</Typography>
    <Switch
      trackColor={{ false: tokens.colors.gray, true: tokens.colors.primary }}
      thumbColor={tokens.colors.white}
      ios_backgroundColor={tokens.colors.gray}
      onValueChange={onToggle}
      value={value}
    />
  </Box>
);
