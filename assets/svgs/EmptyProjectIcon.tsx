import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

export const EmptyProjectIcon = ({ ...props }: SvgProps) => {
  return (
    <Svg width={64} height={65} {...props}>
      <Path
        opacity={0.4}
        d="M58.6667 21.3263V43.673C58.6667 53.3797 52.88 59.1663 43.1733 59.1663H24V5.83301H43.1733C52.88 5.83301 58.6667 11.6197 58.6667 21.3263Z"
        fill="url(#paint0_linear_891_1168)"
      />
      <Path
        d="M23.9999 5.83301V59.1663H20.8266C11.1199 59.1663 5.33325 53.3797 5.33325 43.673V21.3263C5.33325 11.6197 11.1199 5.83301 20.8266 5.83301H23.9999Z"
        fill="#586474"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_891_1168"
          x1={41.3333}
          y1={5.83301}
          x2={41.3333}
          y2={59.1663}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A8B1BD" />
          <Stop offset={1} stopColor="#7D8998" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
