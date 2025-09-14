import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ReceiptNoteIcon = ({ ...props }: SvgProps) => {
  return (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <Path
      d="M3 22.5L4.5 21L6 22.5L7.5 21L9 22.5L10.5 21L12 22.5L13.5 21L15 22.5L16.5 21L18 22.5L19.5 21L21 22.5V2.5L19.5 4L18 2.5L16.5 4L15 2.5L13.5 4L12 2.5L10.5 4L9 2.5L7.5 4L6 2.5L4.5 4L3 2.5V22.5ZM18 9.5H6V7.5H18V9.5ZM18 13.5H6V11.5H18V13.5ZM18 17.5H6V15.5H18V17.5Z"
      fill="#1CD155"
    />
  </Svg>
  );
};
