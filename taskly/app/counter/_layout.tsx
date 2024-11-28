import { Link, Stack } from "expo-router";
import Fontisto from "@expo/vector-icons/Fontisto";
import { theme } from "../../theme";
import { Pressable, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => {
            return (
              <Link href="/counter/history" asChild>
                <Pressable hitSlop={20}>
                  <Fontisto
                    name="history"
                    size={24}
                    color={theme.colorGray}
                    style={styles.historyLogo}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  historyLogo: {
    marginRight: 4,
  },
});
