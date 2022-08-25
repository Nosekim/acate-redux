import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";

import { cartStateData, removeItem } from "./../../store/modules/cart/reducer";

import styles from "./styles";
interface CartModalProps {
  showCartModal: boolean;
  setShowCartModal: () => void;
}

export default function CartModal({
  showCartModal,
  setShowCartModal,
}: CartModalProps) {
  const cart = useSelector(cartStateData);
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="slide"
      visible={showCartModal}
      onRequestClose={setShowCartModal}
    >
      <View style={styles.container}>
        {cart.length > 0 ? (
          <View>
            {cart.map((item, index) => {
              return (
                <View key={`cartitem-${index}`} style={styles.item}>
                  <View style={styles.textContainer}>
                    <Text>{item.name}</Text>
                  </View>
                  <TouchableOpacity onPress={() => dispatch(removeItem(index))}>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        ) : (
          <View>
            <Text>Carrinho vazio ...</Text>
          </View>
        )}
        <TouchableOpacity style={styles.closeBtn} onPress={setShowCartModal}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
