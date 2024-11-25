import { View, StyleSheet } from "react-native";
import { ShoppingListItem } from "./components/ShoppingListItem";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Chicken" />
      <ShoppingListItem name="Pork" isCompleted />
      <ShoppingListItem name="Wagyu" isCompleted />
      <ShoppingListItem name="Beef" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
