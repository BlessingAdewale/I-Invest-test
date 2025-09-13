import { Pressable } from 'react-native';

import { Avatar } from '@/src/components/Avatar';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { globalStyles, IMAGE_SIZE } from '@/src/constants/globalStyles';
import { useUser } from '@/src/hooks/useUser';

const ProfileHeader = () => {
  const { getAvatarUri, user } = useUser();

  const avatarUri = getAvatarUri;

  return (
    <Box>
      <Box paddingTop={24} style={globalStyles.rowStart}>
        <Box paddingBottom={16} paddingRight={12}>
          <Avatar uri={avatarUri} size={IMAGE_SIZE} />
        </Box>
        <Box flexDirection="row" paddingLeft={12}>
          <Box paddingTop={8} flex={0.8}>
            <Typography
              variant="headlineBold20"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {user?.first_name
                ? user?.last_name
                  ? `${user.last_name} ${user.first_name}`
                  : user.first_name
                : 'Guest'}
            </Typography>
            <Typography
              variant="bodyMedium14"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {user?.email || ''}
            </Typography>
            <Pressable>
              <Typography variant="bodyMedium14" color="primary">
                View profile
              </Typography>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
