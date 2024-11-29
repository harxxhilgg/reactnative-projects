import { StyleSheet, TextInput, FlatList, View, Text } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
};

export default function App() {
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);
  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toTimeString(), name: value },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  const handleDelete = (id: string, name: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    console.log(`Ok, deleting ${name}`);
    setShoppingList(newShoppingList);
  };

  const handleCancelDelete = (name: string) => {
    console.log(
      `If you don't wanna delete ${name}, then why did u clicked on cancel button BITCH?`,
    );
  };

  return (
    <FlatList
      data={shoppingList}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your shopping list is empty.</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          placeholder="E.g. Yakitori, Tunamayo, Ramen..."
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          keyboardType="default" //keyboard type
          returnKeyType="done" //submit button appearence
          onSubmitEditing={handleSubmit}
        />
      }
      renderItem={({ item }) => {
        return (
          <ShoppingListItem
            name={item.name}
            onDelete={() => handleDelete(item.id, item.name)}
            onCancelDelete={() => handleCancelDelete(item.name)}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    // justifyContent: "center",
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorLightGray,
    borderWidth: 2,
    padding: 14,
    marginHorizontal: 12,
    marginBottom: 12,
    marginTop: 18,
    fontSize: 18,
    borderRadius: 48,
    backgroundColor: theme.colorWhite,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
