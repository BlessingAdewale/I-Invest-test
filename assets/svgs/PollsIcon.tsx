import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import { tokens } from '@/src/constants/tokens';

type TPollsIcon = SvgProps & {
  focused: boolean;
};
export const PollsIcon = ({ focused, ...props }: TPollsIcon) => {
  const color = focused ? tokens.colors.primary : tokens.colors.gray;
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M2 22.5H22"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.75 4.5V22.5H14.25V4.5C14.25 3.4 13.8 2.5 12.45 2.5H11.55C10.2 2.5 9.75 3.4 9.75 4.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 10.5V22.5H7V10.5C7 9.4 6.6 8.5 5.4 8.5H4.6C3.4 8.5 3 9.4 3 10.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 15.5V22.5H21V15.5C21 14.4 20.6 13.5 19.4 13.5H18.6C17.4 13.5 17 14.4 17 15.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
