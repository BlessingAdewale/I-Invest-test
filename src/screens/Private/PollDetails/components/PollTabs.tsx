import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';

import { ACTIVE_OPACITY } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

export const TABS = ['Residence', 'Executives'] as const;
export type TabType = (typeof TABS)[number];

type TPollTabs = {
  activeTab: TabType;
  setTab: (tab: TabType) => void;
};

export const PollTabs = ({ activeTab, setTab }: TPollTabs) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      alignSelf="flex-start"
      alignItems="center"
      backgroundColor="lightGray"
      paddingLeft={8}
      marginBottom={32}
      paddingY={4}
      style={styles.header}
    >
      {TABS.map((tab) => (
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setTab(tab)}
        >
          <Typography
            paddingX={8}
            paddingY={8}
            color={activeTab === tab ? 'black' : undefined}
          >
            {tab}
          </Typography>
        </TouchableOpacity>
      ))}
    </Box>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: tokens.colors.white,
    borderColor: tokens.colors.white,
    borderRadius: tokens.borderRadius[32] * 2,
    borderWidth: tokens.borderWidth.normal,
  },
  header: {
    borderRadius: tokens.borderRadius[32],
  },
  tab: {
    marginHorizontal: tokens.spacing[10],
    marginVertical: tokens.spacing[10],
  },
});
