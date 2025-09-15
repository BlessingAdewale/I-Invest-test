import * as React from "react";
import Svg, { Path, SvgProps, Circle } from "react-native-svg";
import { tokens } from "@/src/constants/tokens";

type TProjectIcon = SvgProps & {
  focused: boolean;
};

export const WalletIcon = ({ focused, ...props }: TProjectIcon) => {
  const color = focused ? tokens.colors.globalDark : tokens.colors.globalGray;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21 7H3V17H21V7Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        d="M16 12H16.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};
