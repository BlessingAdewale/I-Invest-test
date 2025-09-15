import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

import { tokens } from "@/src/constants/tokens";

type TProjectIcon = SvgProps & {
  focused: boolean;
};
export const TransactionsIcon = ({ focused, ...props }: TProjectIcon) => {
  const color = focused ? tokens.colors.globalDark : tokens.colors.globalGray;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M5 12H19M12 5L19 12L12 19"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
