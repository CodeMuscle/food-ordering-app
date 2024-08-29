import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "@/constants/Colors";
import { Product } from "../types";

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type IProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: IProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
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
