import {Pressable, View} from 'react-native';
import {styles} from './ColorSelection.styles';
import {ProductVariant} from '../../../types/product';
import { memo } from 'react';

interface ColorSelectionProps {
  productVariant: ProductVariant;
  updateProductVariant: (productVariant: ProductVariant) => void;
  isSelected: boolean;
}

export const ColorSelection = memo((props: ColorSelectionProps) => {
  const {productVariant, updateProductVariant, isSelected} = props;

  return (
    <Pressable
      style={[styles.container, isSelected ? styles.selected : {}]}
      onPress={() => updateProductVariant(productVariant)}
      disabled={isSelected}>
      <View
        style={[styles.colorCircle, {backgroundColor: productVariant.hexColor}]}
      />
    </Pressable>
  );
});
