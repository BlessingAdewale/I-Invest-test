import { Avatar } from '@/src/components/Avatar';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { globalStyles, IMAGE_SIZE } from '@/src/constants/globalStyles';

const TransactionInitiatorHeader = () => {
  const user = {
    profile_image:
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg',
    first_name: 'Musk',
    last_name: 'Elon',
    role: 'Estate Manager',
  };

  return (
    <Box>
      <Box paddingTop={8} style={globalStyles.rowStart}>
        <Box paddingRight={12}>
          <Avatar uri={user?.profile_image} size={IMAGE_SIZE} />
        </Box>
        <Box flexDirection="row" paddingLeft={16}>
          <Box flex={0.8}>
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
              {user?.role || ''}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionInitiatorHeader;
