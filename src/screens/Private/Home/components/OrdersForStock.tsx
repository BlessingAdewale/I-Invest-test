import React from "react";
import { Box } from "@/src/components/Box";
import { OrderItem, TOrder } from "./OrderItem";

const dummyOrders: TOrder[] = [
  {
    id: 1,
    orderTitle: "US Stocks",
    orderDate: "$24,450",
    numberOfShares: "13 Stocks",
  },
  {
    id: 2,
    orderTitle: "NG Stocks",
    orderDate: "₦24,450",
    numberOfShares: "24 Stocks",
  },
  {
    id: 3,
    orderTitle: "Mutual Funds",
    orderDate: "₦24,450",
    numberOfShares: "",
  },
  {
    id: 4,
    orderTitle: "Commercial Paper",
    orderDate: "₦24,450",
    numberOfShares: "",
  },
];

export const OrdersForStock = () => {
  return (
    <Box paddingTop={12} paddingX={12}>
      {dummyOrders.slice(0, 4).map((item) => (
        <OrderItem
          key={item.id}
          item={item}
          type="Stocks"
          onPress={(selected) => console.log("Tapped:", selected)}
        />
      ))}
    </Box>
  );
};
