import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { SliderIcon } from '@/assets/svgs/SliderIcon';
import { BottomSheetWrapperHandle } from '@/src/components/BottomSheetWrapper';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import {
  ACTIVE_OPACITY,
  globalStyles,
  IMAGE_SIZE,
} from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

import { CREDIT_TAB, DEBIT_TAB } from '../constants';

type TwoHeaderListWithFilterProps = {
  sheetRef: React.RefObject<BottomSheetWrapperHandle>;
  activeTab: typeof CREDIT_TAB | typeof DEBIT_TAB;
  setTab: React.Dispatch<
    React.SetStateAction<typeof CREDIT_TAB | typeof DEBIT_TAB>
  >;
};

export const TwoHeaderListWithFilter = ({
  sheetRef,
  activeTab,
  setTab,
}: TwoHeaderListWithFilterProps) => {
  return (
    <Box paddingTop={32}>
      {/* Header Tabs */}
      <Box style={globalStyles.rowBetween}>
        <Box
          flexDirection="row"
          marginBottom={24}
          backgroundColor="lightGray"
          style={styles.header}
        >
          <TouchableOpacity
            style={[styles.tab, activeTab === DEBIT_TAB && styles.activeTab]}
            onPress={() => setTab(DEBIT_TAB)}
          >
            <Typography
              color={activeTab === DEBIT_TAB ? 'black' : 'darkGray'}
              variant="bodyMedium16"
              padding={12}
            >
              Expenses
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === CREDIT_TAB && styles.activeTab]}
            onPress={() => setTab(CREDIT_TAB)}
          >
            <Typography
              color={activeTab === CREDIT_TAB ? 'black' : 'darkGray'}
              variant="bodyMedium16"
              padding={12}
            >
              Income
            </Typography>
          </TouchableOpacity>
        </Box>

        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          onPress={() => {
            sheetRef.current?.present();
          }}
          style={{
            marginBottom: tokens.spacing[24] + 1,
          }}
        >
          <Box
            alignItems="center"
            justifyContent="center"
            backgroundColor="primary"
            style={{
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              borderRadius: tokens.borderRadius.full,
            }}
          >
            <SliderIcon />
          </Box>
        </TouchableOpacity>
      </Box>
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
    borderColor: tokens.colors.transparent,
    borderWidth: tokens.borderWidth.normal,
    marginHorizontal: tokens.spacing[10],
    marginVertical: tokens.spacing[10],
  },
});
