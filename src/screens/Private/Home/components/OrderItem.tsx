import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "@/src/components/Box";
import { tokens } from "@/src/constants/tokens";
import { Typography } from "@/src/components/Typography";
import { ACTIVE_OPACITY } from "@/src/constants/globalStyles";
import { Entypo } from "@expo/vector-icons";

export type TOrder = {
  id: number;
  orderTitle: string;
  orderDate: string;
  numberOfShares: string;
};

type OrderItemProps = {
  item: TOrder;
  onPress?: (item: TOrder) => void;
  type?: "Stocks" | "Shares";
};

export const OrderItem = ({
  item,
  onPress,
  type = "Shares",
}: OrderItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={() => onPress?.(item)}
      style={{
        paddingVertical: tokens.spacing[12],
        borderBottomWidth: 1,
        borderBottomColor: tokens.colors.lightGray,
      }}
    >
      <Typography variant="tiktokEmphasisBold16" color="globalDark">
        {item.orderTitle}
      </Typography>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          <Typography color="deeperBlue" variant="tiktokBodyRegular13">
            {item.orderDate}
          </Typography>
          <Typography color="deeperBlue" variant="tiktokBodyRegular13">
            {item.numberOfShares != ""?"•" :""}
          </Typography>
          <Typography color="deeperBlue" variant="tiktokBodyRegular13">
            {type === "Shares"
              ? `Estimated ${item.numberOfShares} shares`
              : `${item.numberOfShares}`}
          </Typography>
        </Box>
        <Entypo name="chevron-right" size={18} color={tokens.colors.deepGray} />
      </Box>
    </TouchableOpacity>
  );
};
