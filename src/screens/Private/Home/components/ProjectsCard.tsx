import { router } from 'expo-router';

import { Box } from '@/src/components/Box';
import { useUser } from '@/src/hooks/useUser';

import { ProjectCardItem } from './ProjectCardItem';

export const ProjectsCard = () => {
  const { projectsData: data } = useUser();

  const handleViewProject = (id: string) => {
    router.navigate({
      pathname: '/view-project',
      params: { id },
    });
  };

  return (
    <Box>
      {data.slice(0, 3).map((item) => {
        return (
          <ProjectCardItem
            key={`${item.id}`}
            item={item}
            onPress={() => handleViewProject(item.id)}
          />
        );
      })}
    </Box>
  );
};
