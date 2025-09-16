import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Avatar } from "@/src/components/Avatar";
import { Box } from "@/src/components/Box";
import { globalStyles, IMAGE_SIZE } from "@/src/constants/globalStyles";
import { tokens } from "@/src/constants/tokens";
import { Feather } from "@expo/vector-icons";

export const HomeHeader = () => {
  const navigateToProfile = () => {};

  const navigateToSearch = () => {};

  return (
    <Box
      marginTop={8}
      paddingBottom={24}
      paddingX={8}
      style={globalStyles.rowBetween}
    >
      <Box>
        <Avatar size={IMAGE_SIZE} onPress={navigateToProfile} />
      </Box>
      <Pressable
        onPress={navigateToSearch}
        style={[{ padding: tokens.spacing["12"] }, styles.searchWrapper]}
      >
        <Feather name="search" size={24} color={tokens.colors.gray} />
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: tokens.colors.lightGray,
    borderRadius: tokens.borderRadius.circle,
  },
});
