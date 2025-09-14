import { SemiCircleArc } from "./SemiCircleArc";
import { tokens } from "@/src/constants/tokens";

const percentages = [20, 5, 12, 30, 12];

const colors = [
  tokens.colors.deepBlue, // Mutual Funds
  tokens.colors.lightBlue, // Treasury Bills
    tokens.colors.lighterBlue, // Commercial Paper
  tokens.colors.lighterBlue2, // Stocks
  tokens.colors.lightestBlue, // Others


];

export const PortfolioArc = () => {
  return <SemiCircleArc data={percentages} colors={colors} />;
};
