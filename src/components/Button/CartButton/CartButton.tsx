import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './CartButton.styles';// Updated to use the CartStore
import { useCartStore } from '../../../stores/cart/CartStore';
import { ProductVariant } from '../../../types/product';

interface CartIconProps {
  productID: number;
  selectedProductVariant: ProductVariant;
}

export const CartIcon = memo(({
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
});
