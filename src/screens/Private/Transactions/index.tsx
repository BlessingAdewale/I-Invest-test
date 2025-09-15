import { ScrollView } from "react-native";
import React from "react";
import SafeScreenView from "@/src/components/SafeAreaScreen";
import { globalStyles } from "@/src/constants/globalStyles";
import { Typography } from "@/src/components/Typography";

const Transactions = () => {
  return (
    <SafeScreenView>
      <ScrollView contentContainerStyle={[globalStyles.rowCenter]}>
        <Typography>Transactions</Typography>
      </ScrollView>
    </SafeScreenView>
  );
};

export default Transactions;


