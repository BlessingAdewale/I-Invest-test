import { router } from 'expo-router';
import { Pressable } from 'react-native';

import { NotificationIcon } from '@/assets/svgs';
import { Avatar } from '@/src/components/Avatar';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { globalStyles, IMAGE_SIZE } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';
import { useUser } from '@/src/hooks/useUser';

export const HomeHeader = () => {
  const { isAdmin, getAvatarUri, getDisplayAddress } = useUser();

  const userDetails = {
    firstName: 'OluwaTobi',
    lastName: 'Ozenoua',
    address: 'Savannah Estate, 3517 W. Gray St. Utica.',
    role: 'admin',
    status: 'Chairman',
    houseNumber: 'House B40',
    profileImage:
      'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
  };

  const showAdmin = isAdmin;
  const avatarUri = getAvatarUri;
  const displayAddress = getDisplayAddress;

  const navigateEstateSelection = () => {
    router.replace('/select-estate');
  };
  const navigateViewEstate = () => {
    router.navigate('/view-estate');
  };

  const navigateToNotification = () => {
    router.navigate('/notifications');
  };

  return (
    <Box paddingTop={16} style={globalStyles.rowBetween}>
      <Box paddingBottom={16} paddingRight={12}>
        <Avatar
          uri={avatarUri}
          size={IMAGE_SIZE}
          onPress={navigateViewEstate}
        />
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Box paddingTop={8} flex={0.8}>
          <Typography variant="headlineBold20">
            Hello {userDetails.firstName || 'Guest'} 👋🏼
          </Typography>
          <Typography
            variant="bodyMedium14"
            numberOfLines={2}
            ellipsizeMode="tail"
            onPress={navigateEstateSelection}
          >
            {displayAddress}
          </Typography>
          {showAdmin ? (
            <Typography variant="bodyMedium14" color="primary">
              {userDetails.status ?? 'Admin'}
            </Typography>
          ) : (
            <Typography variant="bodyMedium14" color="gray">
              {userDetails.houseNumber ?? ''}
            </Typography>
          )}
        </Box>
        <Pressable
          onPress={navigateToNotification}
          style={{ padding: tokens.spacing['10'] }}
        >
          <NotificationIcon />
        </Pressable>
      </Box>
    </Box>
  );
};
