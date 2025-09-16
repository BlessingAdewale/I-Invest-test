import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "@/src/components/Box";
import { tokens } from "@/src/constants/tokens";
import { Typography } from "@/src/components/Typography";
import { ACTIVE_OPACITY, SKELETON_COLORS } from "@/src/constants/globalStyles";
import { Entypo } from "@expo/vector-icons";
import { Skeleton } from "moti/skeleton";

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
  loading?: boolean;
};

export const OrderItem = ({
  item,
  onPress,
  type = "Shares",
  loading = false,
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
      disabled={loading}
    >
      <Skeleton
        show={loading}
        width="60%"
        height={20}
        radius={4}
        colorMode="light"
     colors={SKELETON_COLORS}
      >
        <Typography variant="tiktokEmphasisBold16" color="globalDark">
          {item.orderTitle}
        </Typography>
      </Skeleton>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop={6}
      >
        <Box flexDirection="row" alignItems="center" gap={6}>
          <Skeleton
            show={loading}
            width={90}
            height={18}
            radius={4}
            colorMode="light"
          colors={SKELETON_COLORS}
          >
            <Typography color="deeperBlue" variant="tiktokBodyRegular13">
              {item.orderDate}
            </Typography>
          </Skeleton>

          {!loading && item.numberOfShares !== "" && (
            <Typography color="deeperBlue" variant="tiktokBodyRegular13">
              •
            </Typography>
          )}

          <Skeleton
            show={loading}
            width={140}
            height={20}
            radius={4}
            colorMode="light"
           colors={SKELETON_COLORS}
          >
            <Typography color="deeperBlue" variant="tiktokBodyRegular13">
              {type === "Shares"
                ? `Estimated ${item.numberOfShares} shares`
                : `${item.numberOfShares}`}
            </Typography>
          </Skeleton>
        </Box>

        <Skeleton
          show={loading}
          width={18}
          height={18}
          radius={9}
          colorMode="light"
           colors={SKELETON_COLORS}
        >
          <Entypo
            name="chevron-right"
            size={18}
            color={tokens.colors.deepGray}
          />
        </Skeleton>
      </Box>
    </TouchableOpacity>
  );
};
