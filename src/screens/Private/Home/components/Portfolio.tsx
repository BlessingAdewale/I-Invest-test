import React from "react";
import { Box } from "@/src/components/Box";
import { tokens } from "@/src/constants/tokens";
import { Typography } from "@/src/components/Typography";
import { Entypo } from "@expo/vector-icons";
import { PortfolioArc } from "./PortfolioArc";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useSetRecoilState } from "recoil";
import { portfolioTypeState } from "@/src/constants/recoil/recoilAtom";

export type TPortfolio = {
  id: number;
  portfolioType: string;
  percentage?: string;
};

const dummyOrders: TPortfolio[] = [
  { id: 1, portfolioType: "Stocks", percentage: "51%" },
  { id: 2, portfolioType: "Treasury Bills", percentage: "29%" },
  { id: 3, portfolioType: "Mutual Funds", percentage: "12%" },
  { id: 4, portfolioType: "Commercial Paper", percentage: "7.7%" },
  { id: 5, portfolioType: "Others", percentage: "0.3%" },
];

const Colors: Record<string, string> = {
  stocks: tokens.colors.lighterBlue2,
  "treasury bills": tokens.colors.lightBlue,
  "mutual funds": tokens.colors.deepBlue,
  "commercial paper": tokens.colors.lighterBlue,
  others: tokens.colors.lightestBlue,
};

type PortfolioItemProps = {
  item: TPortfolio;
};

const PortfolioItem = ({ item }: PortfolioItemProps) => {
  const setPortfolioType = useSetRecoilState(portfolioTypeState);
  const color = Colors[item.portfolioType.toLowerCase()] ?? tokens.colors.gray;
  const handlePress = () => {
    setPortfolioType(item.portfolioType);
    router.navigate({
      pathname: "/view-portfolio",
      params: { type: item.portfolioType, percentage: item.percentage ?? "" },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingY={12}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: tokens.colors.lightGray,
        }}
      >
        <Box flexDirection="row" alignItems="center">
          <Box
            width={8}
            height={8}
            borderRadius={4}
            marginRight={5}
            style={{
              backgroundColor: color,
            }}
          />
          <Typography variant="tiktokBodyRegular13" color="globalDark">
            {item.portfolioType}
          </Typography>
        </Box>

        {item.percentage && (
          <Box flexDirection="row" alignItems="center">
            <Typography variant="tiktokBodyRegular13" color="deeperBlue">
              {item.percentage}
            </Typography>
            <Entypo
              name="chevron-right"
              size={18}
              color={tokens.colors.deepGray}
            />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export const Portfolio = () => {
  return (
    <Box paddingTop={12} paddingX={12}>
      <PortfolioArc />
      {dummyOrders.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </Box>
  );
};
