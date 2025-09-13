import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

import { tokens } from '@/src/constants/tokens';

export const HamburgerIcon = ({ ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Rect width={24} height={24} rx={12} fill="#121212" />
      <Path
        d="M7.5 8H16.5V9H7.5V8ZM7.5 11.5H13.5V12.5H7.5V11.5ZM7.5 15H16.5V16H7.5V15Z"
        fill={tokens.colors.white}
      />
    </Svg>
  );
};
