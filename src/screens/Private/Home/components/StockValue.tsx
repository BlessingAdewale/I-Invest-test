import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import { tokens } from "@/src/constants/tokens";
import { Entypo } from "@expo/vector-icons";
import ProgressBar from "@/src/components/ProgressBar";
import { SectionHeader } from "@/src/components/SectionHeader";
import CurrencySwitcher from "./CurrencySwitcher";
import { Tabs } from "@/src/components/Tabs";
import { currencyTabState } from "@/src/constants/recoil/recoilAtom";
import { useRecoilState } from "recoil";

type StockItem = {
  id: number;
  name: string;
  percentage: number;
  units: string;
};

const stockData: StockItem[] = [
  { id: 1, name: "Parthian Captal", percentage: 91.43, units: "200 Units" },
  { id: 2, name: "Acme Money", percentage: 50.23, units: "200 Units" },
  { id: 3, name: "Acme Money", percentage: 23.32, units: "200 Units" },
  { id: 4, name: "Acme Money", percentage: 17.32, units: "200 Units" },
];

export const StockItemRow = ({ item }: { item: StockItem }) => {
  return (
    <Box paddingY={10}>
      {/* Row 1: Name and percentage */}
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="tiktokBodyRegular13" color="globalDark">
          {item.name}
        </Typography>
        <Typography variant="tiktokBodyRegular13" color="globalDark">
          {item.percentage.toFixed(2)}%
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
        <Box >
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
