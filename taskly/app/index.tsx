import { ScrollView, StyleSheet, TextInput } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = [
  {
    id: "1",
    name: "Takoyaki",
  },
  {
    id: "2",
    name: "Wagyu",
  },
  {
    id: "3",
    name: "Pork",
  },
];

export default function App() {
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);
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
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        placeholder="E.g., Yakitori, Tunamayo, Ramen..."
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        keyboardType="default" //keyboard type
        returnKeyType="done" //submit button appearence
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem key={item.id} name={item.name} />
      ))}
    </ScrollView>
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
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    marginTop: 18,
    fontSize: 18,
    borderRadius: 48,
    backgroundColor: theme.colorWhite,
  },
});
