import { Alert, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to DELETE ${name}?`,
      `${name} will be GONE for good.`,
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, Deleting.."),
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => console.log("Then why did u click this BITCH.."),
          style: "cancel",
        },
      ],
    );
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.8}
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGray,
    borderBottomColor: theme.colorLightGray,
  },
  itemText: {
    fontSize: 22,
    fontWeight: "200",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 42,
  },
  completedButton: {
    backgroundColor: theme.colorGray,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGray,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
