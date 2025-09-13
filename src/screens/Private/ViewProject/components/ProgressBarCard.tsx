import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { ACTIVE_OPACITY } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

export const ProgressBarCard = ({
  percentComplete,
  isPaused,
  contributed,
  goal,
  isAdmin,
}: {
  percentComplete: number;
  isPaused: boolean;
  contributed: string;
  goal: string;
  isAdmin: boolean;
}) => {
  const mainColor = isPaused ? tokens.colors.secondary : tokens.colors.primary;
  const mainDarkColor = isPaused
    ? tokens.colors.secondaryDark
    : tokens.colors.primaryDark;

  const progressColor =
    percentComplete >= 100
      ? tokens.colors.green
      : percentComplete > 0 && percentComplete <= 99
        ? mainColor
        : tokens.colors.lightGray;

  const barStyle = {
    backgroundColor:
      percentComplete > 0 && percentComplete < 100
        ? mainDarkColor
        : percentComplete >= 100
          ? tokens.colors.greenDark
          : tokens.colors.lightGray,
    borderRadius: tokens.borderRadius[16],
    borderWidth: percentComplete > 0 ? 5 : 0,
    borderColor:
      percentComplete > 0 && percentComplete < 100
        ? mainDarkColor
        : percentComplete === 100
          ? tokens.colors.greenDark
          : 'transparent',
    padding: percentComplete > 0 ? 4 : 0,
    position: 'relative',
    overflow: 'hidden',
  } as const;

  const textColor = percentComplete === 0 ? 'black' : 'white';

  const subTextColor = percentComplete === 0 ? 'darkGray' : 'white';

  return (
    <Box marginTop={20} style={barStyle}>
      <Box
        style={{
          backgroundColor: progressColor,
          borderRadius: tokens.borderRadius[12],
          opacity: percentComplete > 0 ? ACTIVE_OPACITY + 0.2 : 1,
          width:
            percentComplete > 0 ? `${Math.min(percentComplete, 100)}%` : '100%',
          height: '100%',
          position: 'absolute',
          top: 4,
          left: 3,
        }}
      />

      <Box padding={24}>
        <Typography variant="subtitleMedium20" color={textColor}>
          🏆 Goal{' '}
          {isPaused && percentComplete > 0 && percentComplete < 100
            ? 'paused'
            : 'completion'}
        </Typography>

        <Typography variant="bodyMedium14" color={subTextColor} paddingTop={8}>
          {contributed} / {goal}{' '}
          {isAdmin ? 'residences completed their payments' : 'has been paid'}
        </Typography>
      </Box>
    </Box>
  );
};
