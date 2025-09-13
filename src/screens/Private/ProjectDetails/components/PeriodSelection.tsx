import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';

import { PeriodOption } from './PeriodOption';
import { styles } from '../helpers/styles';

type TPeriodSelection = {
  options: string[];
  selected: string;
  onSelect: (val: string) => void;
};

export const PeriodSelection = ({
  options,
  selected,
  onSelect,
}: TPeriodSelection) => (
  <>
    <Typography variant="bodyRegular14" color="darkGray" paddingBottom={8}>
      Recurrence
    </Typography>
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      flexWrap="wrap"
      style={styles.gridContainer}
    >
      {options.map((period) => (
        <PeriodOption
          key={period}
          period={period}
          isSelected={selected === period}
          onSelect={onSelect}
        />
      ))}
    </Box>
  </>
);
