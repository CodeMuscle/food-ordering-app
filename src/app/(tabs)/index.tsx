import { StyleSheet, Text, View, Image } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";

const product1 = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product1.image }} style={styles.image} />
      <Text style={styles.title}>{product1.name}</Text>
      <Text>${product1.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    columnGap: 4,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: { 
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
