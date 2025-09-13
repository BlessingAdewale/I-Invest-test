import { ScrollView, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { ACTIVE_OPACITY, globalStyles } from '@/src/constants/globalStyles';
import { AmountDisplay } from '../Home/components/AmountDisplay';
import { useUser } from '@/src/hooks/useUser';
import { BankingInfoAndPayment } from '../Home/components/BankingInfoAndPayment';
import { Box } from '@/src/components/Box';
import { tokens } from '@/src/constants/tokens';
import { TProject } from '@/src/mock/MockUser';
import { ProjectArc, useProjectColorMap } from './helpers/ProjectArc';

export default function Finance() {
  const { user, runningProjects } = useUser();

  const projectColorMap = useProjectColorMap(runningProjects);

  return (
    <SafeScreenView edges={['bottom', 'right', 'left']}>
      <ScrollView contentContainerStyle={globalStyles.containerScroll}>
        <Typography paddingTop={32} variant="bodyMedium16" color="darkGray">
          Total balance
        </Typography>

        {user?.default_estate?.amount_generated && (
          <AmountDisplay amount={user.default_estate.amount_generated} />
        )}

        <BankingInfoAndPayment
          iconLeft={<Feather name="file-text" size={20} color="black" />}
          text="Download report"
          onPress={() => null}
        />

        <ProjectArc
          projects={runningProjects}
          projectColorMap={projectColorMap}
        />

        <Typography paddingBottom={16} variant="bodyMedium16" color="darkGray">
          Projects
        </Typography>

        {runningProjects.map((item: TProject) => {
          const borderLeftColor = projectColorMap[item.id];
          return (
            <TouchableOpacity key={item.id} activeOpacity={ACTIVE_OPACITY}>
              <Box
                marginBottom={32}
                paddingY={16}
                paddingX={24}
                flexDirection="row"
                justifyContent="space-between"
                style={{
                  width: '100%',
                  backgroundColor: tokens.colors.lighterGray,
                  borderLeftColor,
                  borderWidth: 1,
                  borderTopRightRadius: tokens.borderRadius[8],
                  borderBottomRightRadius: tokens.borderRadius[8],
                  borderLeftWidth: 2,
                  borderColor: tokens.colors.white,
                  height: 80,
                }}
              >
                <Box>
                  <Typography variant="bodyMedium14" color="darkGray">
                    {item.title}
                  </Typography>
                  <Typography variant="headingSemiBold24" color="black">
                    {item.target_amount}
                  </Typography>
                </Box>
                <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color={tokens.colors.gray}
                />
              </Box>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeScreenView>
  );
}
