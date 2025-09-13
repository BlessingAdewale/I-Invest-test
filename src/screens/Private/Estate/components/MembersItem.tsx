import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Avatar } from '@/src/components/Avatar';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { TUser } from '@/src/mock/MockUser';
import { ACTIVE_OPACITY } from '@/src/constants/globalStyles';

type MembersItemProps = {
  member: TUser;
  onPress?: () => void;
};

export default function MembersItem({ member, onPress }: MembersItemProps) {
  const fullName = `${member.first_name} ${member.last_name}`;
  const avatarUri = member.profile_image;

  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
      <Box flexDirection="row" alignItems="center" gap={12} paddingY={12}>
        <Avatar uri={avatarUri} size={48} />
        <Box>
          <Typography variant="subtitleMedium18">{fullName || ''}</Typography>
          <Typography variant="bodyRegular14" color="gray">
            {member.role === 'admin' ? 'Executive' : 'Resident'}
          </Typography>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
