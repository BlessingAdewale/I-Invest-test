import { router } from 'expo-router';
import React from 'react';

import { Box } from '@/src/components/Box';
import { SectionHeader } from '@/src/components/SectionHeader';
import { useUser } from '@/src/hooks/useUser';

import { EmptyProjectCard } from './EmptyProjectCard';
import { ProjectsCard } from './ProjectsCard';

export const Projects = () => {
  const { getProjectsLength } = useUser();
  const projectsCount = getProjectsLength;
  return (
    <Box paddingTop={32}>
      <SectionHeader
        leftTitle="Projects"
        rightTitle={projectsCount > 0 ? 'See all' : ''}
        onPress={() => router.navigate('/project')}
      />
      <Box paddingTop={16}>
        {projectsCount > 0 ? <ProjectsCard /> : <EmptyProjectCard />}
      </Box>
    </Box>
  );
};
