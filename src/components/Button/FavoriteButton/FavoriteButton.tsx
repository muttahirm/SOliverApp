import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './FavoriteButton.styles';
import { useFavoritesStore } from '../../../stores/favorite/FavoriteStore';
import { ProductVariant } from '../../../types/product';

interface FavoriteIconProps {
  productID: number;
  selectedProductVariant: ProductVariant;
}

export const FavoriteIcon = ({
  productID,
  selectedProductVariant,
}: FavoriteIconProps) => {
  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite);
  const isFavorite = useFavoritesStore(state =>
    state.isFavorite(productID, selectedProductVariant.key),
  );

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(productID, selectedProductVariant.key);
  }, [productID, selectedProductVariant.key, toggleFavorite]);

  return (
    <TouchableOpacity
      style={styles.favoriteContainer}
      onPress={handleToggleFavorite}>
      <Icon name={isFavorite ? 'heart' : 'hearto'} size={15} color="red" />
    </TouchableOpacity>
  );
};
