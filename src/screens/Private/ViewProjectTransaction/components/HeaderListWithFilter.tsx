import React, { useCallback } from 'react';
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

type HeaderListWithFilterProps = {
  sheetRef: React.RefObject<BottomSheetWrapperHandle>;
};

export const HeaderListWithFilter = ({
  sheetRef,
}: HeaderListWithFilterProps) => {
  const handleOpenSheet = useCallback(() => {
    sheetRef.current?.present();
  }, [sheetRef]);

  return (
    <Box flex={1} paddingTop={32}>
      {/* Header Tabs */}
      <Box style={globalStyles.rowBetween}>
        <Box
          flexDirection="row"
          marginBottom={24}
          backgroundColor="lightGray"
          style={styles.header}
        >
          <Box style={[styles.tab, styles.activeTab]}>
            <Typography color="black" variant="bodyMedium16" padding={12}>
              Income
            </Typography>
          </Box>
        </Box>

        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          onPress={handleOpenSheet}
          style={{ marginBottom: tokens.spacing[24] }}
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
