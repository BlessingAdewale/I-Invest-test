import { TouchableOpacity } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';

import { styles } from '../helpers/styles';

type TPaymentModeTabs = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  PER_RESIDENCE_TAB: string;
  TOTAL_BUDGET_TAB: string;
};

export const PaymentModeTabs = ({
  activeTab,
  onTabChange,
  PER_RESIDENCE_TAB,
  TOTAL_BUDGET_TAB,
}: TPaymentModeTabs) => (
  <Box flexDirection="row">
    <Box
      flexDirection="row"
      marginBottom={32}
      backgroundColor="lightGray"
      style={styles.header}
    >
      {[PER_RESIDENCE_TAB, TOTAL_BUDGET_TAB].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => onTabChange(tab)}
        >
          <Typography
            variant="bodyMedium16"
            style={[
              styles.tabTypography,
              activeTab === tab && styles.activeText,
            ]}
          >
            {tab === PER_RESIDENCE_TAB ? 'Per residence' : 'Total budget'}
          </Typography>
        </TouchableOpacity>
      ))}
    </Box>
  </Box>
);
