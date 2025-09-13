import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ArrowRightIcon = ({ ...props }: SvgProps) => {
  return (
    <Svg width={16} height={17} viewBox="0 0 16 17" fill="none" {...props}>
      <Path
        d="M5.93994 13.7802L10.2866 9.43355C10.7999 8.92021 10.7999 8.08021 10.2866 7.56688L5.93994 3.22021"
        stroke="#9AA4B2"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
