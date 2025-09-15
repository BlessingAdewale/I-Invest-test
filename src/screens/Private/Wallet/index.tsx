import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import SafeScreenView from "@/src/components/SafeAreaScreen";
import { globalStyles } from "@/src/constants/globalStyles";
import { Typography } from "@/src/components/Typography";

const Wallet = () => {
  return (
    <SafeScreenView>
      <ScrollView contentContainerStyle={[globalStyles.rowCenter]}>
        <Typography>Wallet</Typography>
      </ScrollView>
    </SafeScreenView>
  );
};

export default Wallet;
