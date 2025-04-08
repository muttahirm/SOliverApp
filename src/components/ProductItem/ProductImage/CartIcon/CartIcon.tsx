import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './CartIcon.styles';
import { ProductVariant } from '../../../../types/product';
import { useCartStore } from '../../../../stores/cart/CartStore';  // Updated to use the CartStore

interface CartIconProps {
  productID: number;
  selectedProductVariant: ProductVariant;
}

export const CartIcon = ({
  productID,
  selectedProductVariant,
}: CartIconProps) => {
  const addToCart = useCartStore(state => state.addToCart);
  const getItemQuantity = useCartStore(state =>
    state.getItemQuantity(productID, selectedProductVariant.key)
  );

  const handleAddToCart = useCallback(() => {
    addToCart(productID, selectedProductVariant.key, 1);
  }, [productID, selectedProductVariant.key, addToCart]);

  const itemQuantity = getItemQuantity;

  return (
    <TouchableOpacity
      style={styles.favoriteContainer}
      onPress={handleAddToCart}>
      <Icon
        name={'shoppingcart'}
        size={15}
        color={itemQuantity > 0 ? 'green' : 'black'}  // You can modify this to show the cart icon differently when items are added
      />
    </TouchableOpacity>
  );
};
