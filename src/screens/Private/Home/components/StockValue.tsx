import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import { tokens } from "@/src/constants/tokens";
import { Entypo } from "@expo/vector-icons";
import ProgressBar from "@/src/components/ProgressBar";
import { SectionHeader } from "@/src/components/SectionHeader";
import { Tabs } from "@/src/components/Tabs";
import {
  currencyTabState,
  portfolioTypeState,
} from "@/src/constants/recoil/recoilAtom";
import { useRecoilState, useRecoilValue } from "recoil";

type StockItem = {
  id: number;
  name: string;
  percentage: number;
  units: string;
  amount: number;
};

export const StockItemRow = ({ item }: { item: StockItem }) => {
  const activeTab = useRecoilValue(currencyTabState);

  const formattedAmount = item.amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Box paddingY={10}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="tiktokBodyRegular13" color="globalDark">
          {item.name}
        </Typography>
        <Typography variant="tiktokBodyRegular13" color="globalDark">
          {activeTab !== "USD"
            ? `${item.percentage.toFixed(2)}%`
            : `$${formattedAmount}`}
        </Typography>
      </Box>

      <Box marginTop={6} marginBottom={6}>
        <ProgressBar progress={item.percentage / 100} />
      </Box>

      <TouchableOpacity activeOpacity={0.7}>
        <Box flexDirection="row" alignItems="center">
          <Typography variant="tiktokBodyRegular12" color="deeperBlue">
            {item.units}
          </Typography>
          <Entypo
            name="chevron-right"
            size={12}
            color={tokens.colors.globalDark}
            style={{ marginLeft: 4 }}
          />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export const StockValue = () => {
  const USD_TAB = "USD";
  const NGN_TAB = "NGN";
  const type = useRecoilValue(portfolioTypeState);

  const stockData: StockItem[] =
    type === "Stocks"
      ? [
          {
            id: 1,
            name: "GTCO",
            percentage: 91.43,
            units: "24,547 Shares",
            amount: 3400,
          },
          {
            id: 2,
            name: "MTN",
            percentage: 50.23,
            units: "10,220 Shares",
            amount: 1400,
          },
          {
            id: 3,
            name: "Zenith Bank",
            percentage: 23.32,
            units: "7,100 Shares",
            amount: 400,
          },
          {
            id: 4,
            name: "UBA",
            percentage: 17.32,
            units: "5,200 Shares",
            amount: 200,
          },
        ]
      : type === "Mutual Funds"
        ? [
            {
              id: 1,
              name: "Parthian Capital",
              percentage: 91.43,
              units: "200 Units",
              amount: 5000,
            },
            {
              id: 2,
              name: "Acme Money",
              percentage: 50.23,
              units: "150 Units",
              amount: 3000,
            },
            {
              id: 3,
              name: "Acme Money",
              percentage: 23.32,
              units: "90 Units",
              amount: 1200,
            },
            {
              id: 4,
              name: "Acme Money",
              percentage: 17.32,
              units: "60 Units",
              amount: 900,
            },
          ]
        : type === "Treasury Bills"
          ? [
              {
                id: 1,
                name: "90-Day T-Bill",
                percentage: 70.12,
                units: "₦1,000,000 Face Value",
                amount: 7000,
              },
              {
                id: 2,
                name: "180-Day T-Bill",
                percentage: 20.45,
                units: "₦500,000 Face Value",
                amount: 1022,
              },
              {
                id: 3,
                name: "365-Day T-Bill",
                percentage: 9.43,
                units: "₦200,000 Face Value",
                amount: 188,
              },
            ]
          : type === "Commercial Paper"
            ? [
                {
                  id: 1,
                  name: "Dangote CP",
                  percentage: 60.23,
                  units: "₦2,000,000 Face Value",
                  amount: 12046,
                },
                {
                  id: 2,
                  name: "MTN CP",
                  percentage: 25.15,
                  units: "₦1,200,000 Face Value",
                  amount: 3018,
                },
                {
                  id: 3,
                  name: "Seplat CP",
                  percentage: 14.62,
                  units: "₦800,000 Face Value",
                  amount: 1169,
                },
              ]
            : [
                {
                  id: 1,
                  name: "Corporate Bonds",
                  percentage: 50.0,
                  units: "₦1,500,000 Face Value",
                  amount: 7500,
                },
                {
                  id: 2,
                  name: "Eurobonds",
                  percentage: 30.0,
                  units: "$10,000 Face Value",
                  amount: 30,
                },
                {
                  id: 3,
                  name: "Alternative Assets",
                  percentage: 20.0,
                  units: "₦500,000 Value",
                  amount: 1000,
                },
              ];

  const [activeTab, setActiveTab] = useRecoilState(currencyTabState);

  return (
    <Box
      borderRadius={8}
      padding={12}
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      }}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={12}
      >
        <SectionHeader leftTitle="Store Value" />
        <Box>
          <Tabs
            size="compact"
            tabs={[
              { key: NGN_TAB, label: "%" },
              { key: USD_TAB, label: "$" },
            ]}
            activeTab={activeTab}
            setTab={setActiveTab}
          />
        </Box>
      </Box>

      {stockData.map((item) => (
        <StockItemRow key={item.id} item={item} />
      ))}
    </Box>
  );
};
