import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import { tokens } from '@/src/constants/tokens';

type TProjectIcon = SvgProps & {
  focused: boolean;
};
export const ProjectIcon = ({ focused, ...props }: TProjectIcon) => {
  const color = focused ? tokens.colors.primary : tokens.colors.gray;
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M12.37 9.37988H17.62"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38 9.37988L7.13 10.1299L9.38 7.87988"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.37 16.3799H17.62"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38 16.3799L7.13 17.1299L9.38 14.8799"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
