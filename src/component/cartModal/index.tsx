import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";

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
            {cart.map((item) => {
              return (
                <View style={styles.item}>
                  <Text>{item.name}</Text>
                  <TouchableOpacity onPress={() => dispatch(removeItem(item))}>
                    <Text>Remover Item</Text>
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
