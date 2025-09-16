import { ScrollView } from "react-native";
import SafeScreenView from "@/src/components/SafeAreaScreen";
import { globalStyles } from "@/src/constants/globalStyles";
import { BalanceDashboard } from "@/src/screens/Private/Home/components/BalanceDashboard";
import { tokens } from "@/src/constants/tokens";
import { Box } from "@/src/components/Box";

import PortfolioWheel from "./components/PortfolioItem";
import { OrdersForStock } from "../Home/components/OrdersForStock";

export default function PortfolioDistribution() {
  return (
    <SafeScreenView
      backgroundColor={tokens.colors.background}
      edges={["left", "right", "bottom"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.containerScroll}
      >
        <Box
          style={{
            marginTop: tokens.spacing[7],
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        >
          <BalanceDashboard date="Since 12 May, 2022" />
          <Box flexDirection="row" justifyContent="center" alignItems="center">
            <PortfolioWheel />
          </Box>
        </Box>
        <Box
          style={{
            marginTop: tokens.spacing[7],
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        >
          <OrdersForStock />
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}
