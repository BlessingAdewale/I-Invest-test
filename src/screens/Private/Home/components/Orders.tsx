import React, { useEffect, useState } from "react";
import { Box } from "@/src/components/Box";
import { OrderItem, TOrder } from "./OrderItem";

const dummyOrders: TOrder[] = [
  {
    id: 1,
    orderTitle: "GTCO: Market buy",
    orderDate: "Feb 24, 2021",
    numberOfShares: "33",
  },
  {
    id: 2,
    orderTitle: "GTCO: Market buy",
    orderDate: "Feb 25, 2021",
    numberOfShares: "33",
  },
  {
    id: 3,
    orderTitle: "GTCO: Market buy",
    orderDate: "Feb 26, 2021",
    numberOfShares: "33",
  },
  {
    id: 4,
    orderTitle: "GTCO: Market buy",
    orderDate: "Feb 26, 2021",
    numberOfShares: "33",
  },
  {
    id: 5,
    orderTitle: "GTCO: Market buy",
    orderDate: "Feb 26, 2021",
    numberOfShares: "33",
  },
];

export const Orders = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box paddingTop={12} paddingX={12}>
      {dummyOrders.slice(0, 3).map((item) => (
        <OrderItem
          key={item.id}
          item={loading ? { ...item, orderTitle: "", orderDate: "", numberOfShares: "" } : item}
          loading={loading} 
          onPress={(selected) => console.log("Tapped:", selected)}
        />
      ))}
    </Box>
  );
};
