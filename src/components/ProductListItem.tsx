import { StyleSheet, Text, View, Image } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";

interface IPropType {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const ProductListItem = ({ product }: IPropType) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

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
