import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';

export const ProjectDetailsHeader = () => (
  <Box>
    <Typography paddingTop={32} variant="headingSemiBold24">
      Create new project
    </Typography>
    <Typography
      variant="bodyMedium16"
      color="darkGray"
      paddingTop={8}
      paddingBottom={40}
    >
      Set goals and deadline for new estate projects
    </Typography>
  </Box>
);
