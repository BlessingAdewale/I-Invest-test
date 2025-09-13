import { EvilIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, Pressable, FlatList, StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type TProjectDropdownProps = {
  projects: string[];
  selectedProject: string | null;
  onSelect: (project: string) => void;
};

export const ProjectDropdown = ({
  projects,
  selectedProject,
  onSelect,
}: TProjectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        style={{
          borderWidth: 1,
          borderRadius: tokens.borderRadius[8],
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderColor: selectedProject
            ? tokens.colors.primary
            : tokens.colors.lightGray,
        }}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography color={selectedProject ? 'primary' : 'darkGray'}>
            {selectedProject ?? 'Select a project'}
          </Typography>
          <EvilIcons
            name="chevron-down"
            size={24}
            color={tokens.colors.darkGray}
            style={{ marginLeft: 8 }}
          />
        </Box>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
          <Box
            backgroundColor="white"
            paddingY={8}
            style={{
              borderRadius: tokens.borderRadius[32],
              borderWidth: 1,
              borderColor: tokens.colors.lightGray,
              maxHeight: 250,
            }}
          >
            <FlatList
              data={projects}
              keyExtractor={(item) => item}
              ItemSeparatorComponent={() => <Box paddingY={8} />}
              renderItem={({ item, index }) => {
                const isSelected = item === selectedProject;
                const isFirst = index === 0;
                const isLast = index === projects.length - 1;

                return (
                  <Pressable
                    onPress={() => {
                      onSelect(item);
                      setIsOpen(false);
                    }}
                    style={[
                      styles.dropdownItem,
                      isSelected && styles.dropdownItemSelected,
                      isFirst && styles.firstItem,
                      isLast && styles.lastItem,
                    ]}
                  >
                    <Typography
                      style={isSelected ? { fontWeight: '600' } : undefined}
                    >
                      {item}
                    </Typography>
                  </Pressable>
                );
              }}
            />
          </Box>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  dropdownItem: {
    backgroundColor: tokens.colors.white,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  dropdownItemSelected: {
    backgroundColor: tokens.colors.primaryLight,
  },
  firstItem: {
    borderTopLeftRadius: tokens.borderRadius[32],
    borderTopRightRadius: tokens.borderRadius[32],
  },
  lastItem: {
    borderBottomLeftRadius: tokens.borderRadius[32],
    borderBottomRightRadius: tokens.borderRadius[32],
  },
  modalOverlay: {
    backgroundColor: tokens.colors.modalColor,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
});
