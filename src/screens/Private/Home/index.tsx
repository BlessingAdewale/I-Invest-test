import { ScrollView } from "react-native";
import SafeScreenView from "@/src/components/SafeAreaScreen";
import { globalStyles } from "@/src/constants/globalStyles";
import { BalanceDashboard } from "@/src/screens/Private/Home/components/BalanceDashboard";
import { HomeHeader } from "@/src/screens/Private/Home/components/HomeHeader";
import { tokens } from "@/src/constants/tokens";
import { Box } from "@/src/components/Box";
import CurrencySwitcher from "./components/CurrencySwitcher";
import MarketInformation from "./components/MarketInformation";
import StatContainer from "@/src/screens/Private/Home/components/StatContainer";
import { SectionHeader } from "@/src/components/SectionHeader";
import { Orders } from "./components/Orders";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
    <SafeScreenView
      backgroundColor={tokens.colors.background}
      edges={["left", "right", "top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.containerScroll}
      >
        <Box
          style={{
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        >
          <HomeHeader />
          <CurrencySwitcher />
          <BalanceDashboard />
          <MarketInformation />
          <StatContainer />
        </Box>
        <Box
          marginTop={8}
          style={{
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        >
          <Box marginTop={20} marginX={12}>
            <SectionHeader leftTitle="Pending Orders" rightTitle="See all" onPress={()=> null} />
          </Box>
          <Orders />
        </Box>
        <Box
          marginTop={8}
          style={{
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        >
          <Box marginTop={20} marginX={12}>
            <SectionHeader leftTitle="Portfolio Distribution" rightTitle="See all" onPress={()=> null} />
          </Box>
          <Portfolio />
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}
