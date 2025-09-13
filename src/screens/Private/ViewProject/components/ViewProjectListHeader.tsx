import { router } from "expo-router";
import { useCallback } from "react";

import { Box } from "@/src/components/Box";
import { SectionHeader } from "@/src/components/SectionHeader";
import { Typography } from "@/src/components/Typography";
import { tokens } from "@/src/constants/tokens";

import { ProgressBarCard } from "./ProgressBarCard";
import { AmountDisplay } from "../../Home/components/AmountDisplay";
import { BankingInfoAndPayment } from "../../Home/components/BankingInfoAndPayment";

import type { TTransaction } from "../../Home/components/OrderItem";

type TProjectViewData = {
  title: string;
  description: string;
  amount_that_has_been_contributed: string;
  amount_to_contribute: string;
  transaction: TTransaction[];
  project_paused: boolean;
};

type TViewProjectListHeader = {
  data: TProjectViewData;
  percentComplete: number;
  isPaused: boolean;
  admin: boolean;
  onMakePayment: () => void;
  onSeeAllTransactionsPress?: () => void;
};

export const ViewProjectListHeader = ({
  data,
  percentComplete,
  isPaused,
  admin,
  onMakePayment,
  onSeeAllTransactionsPress,
}: TViewProjectListHeader) => {
  const numericContributed = parseFloat(
    data.amount_that_has_been_contributed.replace(/[^0-9.-]+/g, "")
  );
  const zeroAmountColor =
    numericContributed === 0 ? tokens.colors.gray : tokens.colors.darkGray;

  const handleSeeAllPress = useCallback(() => {
    if (onSeeAllTransactionsPress) {
      onSeeAllTransactionsPress();
    } else {
      router.navigate("/view-project-transaction");
    }
  }, [onSeeAllTransactionsPress]);

  return (
    <Box paddingTop={24}>
      <Typography variant="headingSemiBold24">{data.title}</Typography>
      <Typography
        variant="bodyMedium16"
        color="darkGray"
        paddingTop={8}
        paddingBottom={40}
      >
        {data.description}
      </Typography>

      <Typography variant="bodyMedium16" style={{ color: zeroAmountColor }}>
        Total balance
      </Typography>

      <AmountDisplay amount={data.amount_that_has_been_contributed} />

      <BankingInfoAndPayment
        onPress={percentComplete < 100 ? onMakePayment : undefined}
        text={percentComplete >= 100 ? "Download report" : "Make a payment"}
      />

      <ProgressBarCard
        percentComplete={percentComplete}
        isPaused={isPaused}
        contributed={data.amount_that_has_been_contributed}
        goal={data.amount_to_contribute}
        isAdmin={admin}
      />

      <Box marginTop={32} marginBottom={16}>
        <SectionHeader
          leftTitle={`Transactions (${data.transaction.length})`}
          rightTitle="See all"
          onPress={handleSeeAllPress}
        />
      </Box>
    </Box>
  );
};
