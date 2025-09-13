import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { Fragment, useCallback } from 'react';
import { Pressable, SectionList } from 'react-native';

import { Box } from '@/src/components/Box';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { globalStyles, IMAGE_SIZE } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';
import { useUser } from '@/src/hooks/useUser';
import { TProject } from '@/src/mock/MockUser';

import { EmptyProjectCard } from '../Home/components/EmptyProjectCard';
import { ProjectCardItem } from '../Home/components/ProjectCardItem';

export default function Project() {
  const { runningProjects, completedProjects, getProjectsLength } = useUser();
  const isEmpty = getProjectsLength === 0;

  const sections = [
    {
      title: 'Running Projects',
      data: runningProjects,
    },
    {
      title: 'Completed Projects',
      data: completedProjects,
    },
  ].filter((section) => section.data.length > 0);

  const handleCreateProject = useCallback(() => {
    router.navigate('/create-project');
  }, []);

  const handleViewProject = useCallback((item: TProject) => {
    router.navigate({
      pathname: '/view-project',
      params: { id: item.id },
    });
    console.log('Pressed project:', item.id);
  }, []);

  return (
    <SafeScreenView style={globalStyles.wrapper}>
      <SectionList
        sections={isEmpty ? [] : sections}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.containerScroll}
        renderItem={({ item, index }) => (
          <Box paddingTop={index === 0 ? 0 : 10} paddingBottom={10}>
            <ProjectCardItem
              showPay
              item={item}
              onPress={() => handleViewProject(item)}
            />
          </Box>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Box paddingY={16}>
            <Typography variant="bodyMedium16" color="darkGray">
              {title}
            </Typography>
          </Box>
        )}
        ListEmptyComponent={
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            marginTop={64}
          >
            <EmptyProjectCard />
          </Box>
        }
        ListHeaderComponent={
          <Fragment>
            <Typography
              color="black"
              paddingTop={16}
              variant="headingSemiBold24"
            >
              Project
            </Typography>
            <Typography
              variant="bodyMedium16"
              color="darkGray"
              paddingTop={8}
              paddingBottom={24}
            >
              Save towards an estate project
            </Typography>
          </Fragment>
        }
      />

      {/* Floating Plus Button */}
      <Box
        style={{
          position: 'absolute',
          bottom: tokens.spacing[24],
          right: tokens.spacing[24],
        }}
      >
        <Pressable onPress={handleCreateProject}>
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
            <AntDesign name="plus" size={24} color={tokens.colors.white} />
          </Box>
        </Pressable>
      </Box>
    </SafeScreenView>
  );
}
