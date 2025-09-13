import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

import { tokens } from '@/src/constants/tokens';

export const EmptyTransactionIcon = ({ ...props }: SvgProps) => {
  return (
    <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
      <Path
        d="M58.6665 15.9997V22.453C58.6665 26.6663 55.9998 29.333 51.7865 29.333H42.6665V10.693C42.6665 7.73301 45.0932 5.33301 48.0532 5.33301C50.9598 5.35967 53.6265 6.53301 55.5465 8.45301C57.4665 10.3997 58.6665 13.0663 58.6665 15.9997Z"
        fill={tokens.colors.darkGray}
      />
      <Path
        opacity={0.4}
        d="M5.3335 18.6663V55.9997C5.3335 58.213 7.84018 59.4663 9.60018 58.133L14.1602 54.7197C15.2268 53.9197 16.7202 54.0263 17.6802 54.9863L22.1068 59.4397C23.1468 60.4797 24.8535 60.4797 25.8935 59.4397L30.3735 54.9597C31.3068 54.0263 32.8002 53.9197 33.8402 54.7197L38.4001 58.133C40.1601 59.4397 42.6668 58.1863 42.6668 55.9997V10.6663C42.6668 7.73301 45.0668 5.33301 48.0002 5.33301H18.6668H16.0002C8.00016 5.33301 5.3335 10.1063 5.3335 15.9997V18.6663Z"
        fill="url(#paint0_linear_1119_2296)"
      />
      <Path
        d="M32 26H16C14.9067 26 14 25.0933 14 24C14 22.9067 14.9067 22 16 22H32C33.0933 22 34 22.9067 34 24C34 25.0933 33.0933 26 32 26Z"
        fill={tokens.colors.darkGray}
      />
      <Path
        d="M30 36.667H18C16.9067 36.667 16 35.7603 16 34.667C16 33.5737 16.9067 32.667 18 32.667H30C31.0933 32.667 32 33.5737 32 34.667C32 35.7603 31.0933 36.667 30 36.667Z"
        fill={tokens.colors.darkGray}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1119_2296"
          x1={26.6668}
          y1={5.33301}
          x2={26.6668}
          y2={60.2197}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A8B1BD" />
          <Stop offset={1} stopColor="#7D8998" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
