import { View, TouchableOpacity, Text } from "react-native";

import { useSelector } from "react-redux";
import { cartStateData } from "./../../store/modules/cart/reducer";

import styles from "./style";

import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import CartModal from "../cartModal";

const Cart = () => {
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
  const toggleModal = () => setShowCartModal((old) => !old);
  const cart = useSelector(cartStateData);

  return (
    <View style={styles.container}>
      {showCartModal && (
        <CartModal setShowCartModal={toggleModal} showCartModal />
      )}
      <TouchableOpacity onPress={toggleModal}>
        <AntDesign name="shoppingcart" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.contentCart}>
        <Text style={styles.textContentCart}>
          {cart.length > 0 ? cart.length : 0}
        </Text>
      </View>
    </View>
  );
};

export default Cart;
