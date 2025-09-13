import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';

import { Box } from '@/src/components/Box';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { globalStyles } from '@/src/constants/globalStyles';
import { transactionState } from '@/src/constants/recoil/recoilAtom';
import { tokens } from '@/src/constants/tokens';

type TItem = {
  label: string;
  value: string;
  image: string;
};

type TProps = {
  items: TItem[];
  onClose?: () => void;
};

export const BankBottomSheet = ({ items, onClose }: TProps) => {
  const [searchText, setSearchText] = useState('');
  const [transaction, setTransaction] = useRecoilState(transactionState);

  const selectedValue = transaction.bank;

  const handleSelect = (bank: string) => {
    setTransaction((prev) => ({ ...prev, bank }));
    onClose?.(); // Dismiss bottom sheet if available
  };

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <BottomSheetScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
    >
      <Box flex={1} paddingBottom={24}>
        <Typography variant="headingSemiBold24" paddingBottom={16}>
          Choose Bank
        </Typography>
        <TextInput
          placeholder="Search bank"
          value={searchText}
          onChangeText={setSearchText}
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />

        {filteredItems.map(({ label, value, image }) => {
          const selected = selectedValue === value;
          return (
            <TouchableOpacity
              key={value}
              onPress={() => handleSelect(value)}
              style={[
                styles.item,
                selected && { backgroundColor: tokens.colors.lightGray },
              ]}
            >
              <Box style={globalStyles.rowBetween}>
                <Box
                  marginRight={12}
                  style={[
                    styles.image,
                    { backgroundColor: tokens.colors.lightGray },
                  ]}
                >
                  <Image
                    source={image ? { uri: image } : undefined}
                    contentFit="cover"
                    style={styles.image}
                    transition={500}
                  />
                </Box>
                <Box flex={1}>
                  <Typography variant="bodyMedium14">{label}</Typography>
                </Box>
              </Box>
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
  image: {
    borderRadius: 40 / 2,
    height: 40,
    marginRight: tokens.spacing[12],
    width: 40,
  },
  item: {
    borderRadius: tokens.borderRadius[12],
    paddingHorizontal: tokens.spacing['8'],
    paddingVertical: tokens.spacing['8'],
  },
});
