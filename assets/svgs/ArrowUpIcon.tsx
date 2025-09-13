import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ArrowUpIcon = ({ ...props }: SvgProps) => {
  return (
    <Svg
    width={10}
    height={9}
    viewBox="0 0 10 9"
    fill="none"
    {...props}
  >
    <Path
      d="M4.57692 0.671725C4.77304 0.360351 5.22696 0.360351 5.42308 0.671725L9.7134 7.48353C9.92311 7.81649 9.68382 8.25 9.29032 8.25H0.709676C0.316178 8.25 0.0768883 7.81649 0.286598 7.48353L4.57692 0.671725Z"
      fill="black"
    />
  </Svg>
  );
};
