import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { transactionState } from '@/src/constants/recoil/recoilAtom';
import { tokens } from '@/src/constants/tokens';

type TItem = {
  label: string;
  value: string;
};

type TProps = {
  items: TItem[];
  onClose?: () => void;
};

export const WithdrawCashBottomSheet = ({ items, onClose }: TProps) => {
  const [transaction, setTransaction] = useRecoilState(transactionState);
  const { project } = transaction;

  const handleSelect = (value: string) => {
    setTransaction((prev) => ({ ...prev, project: value }));
    onClose?.();
  };

  return (
    <BottomSheetScrollView style={styles.container}>
      <Box marginBottom={24}>
        {items.map(({ label, value }) => {
          const selected = project === value;
          return (
            <TouchableOpacity
              key={value}
              onPress={() => handleSelect(value)}
              style={[
                styles.item,
                selected && { backgroundColor: tokens.colors.lightGray },
              ]}
            >
              <Typography variant="bodyMedium14">{label}</Typography>
            </TouchableOpacity>
          );
        })}
      </Box>
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: tokens.spacing['16'],
    paddingHorizontal: tokens.spacing['16'],
    paddingTop: tokens.spacing['16'],
  },
  item: {
    borderRadius: tokens.borderRadius[12],
    marginBottom: tokens.spacing['8'],
    paddingHorizontal: tokens.spacing['8'],
    paddingVertical: tokens.spacing['12'],
  },
});
