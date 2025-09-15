import { ScrollView } from "react-native";
import React from "react";
import SafeScreenView from "@/src/components/SafeAreaScreen";
import { globalStyles } from "@/src/constants/globalStyles";
import { Typography } from "@/src/components/Typography";

const Profile = () => {
  return (
    <SafeScreenView>
      <ScrollView contentContainerStyle={[globalStyles.rowCenter]}>
        <Typography>Profile</Typography>
      </ScrollView>
    </SafeScreenView>
  );
};

export default Profile;

