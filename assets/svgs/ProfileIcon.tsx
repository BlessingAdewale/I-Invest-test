import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

import { tokens } from "@/src/constants/tokens";

type TProjectIcon = SvgProps & {
  focused: boolean;
};
export const ProfileIcon = ({ focused, ...props }: TProjectIcon) => {
  const color = focused ? tokens.colors.globalDark : tokens.colors.globalGray;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Circle cx={12} cy={8} r={4} stroke={color} strokeWidth={1.5} />
      <Path
        d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};
