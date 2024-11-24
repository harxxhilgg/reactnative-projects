import { Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to DELETE this?",
      "It will be GONE for good.",
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
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Oysters</Text>
        <TouchableOpacity
          onPress={handleDelete}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
