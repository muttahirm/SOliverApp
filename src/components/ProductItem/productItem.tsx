import React, {useState, useMemo} from 'react';
import {View, Text} from 'react-native';
import {Product} from '../../types/product';
import {styles} from './productItem.styles';
import {calculateProductItemMargin} from '../../utils/calculateProductItemMargin';
import {calculatePriceAfterDiscount} from '../../utils/calculatePriceAfterDiscount';
import {getPriceValueWithCurrency} from '../../utils/getPriceValueWithCurrency';
import {ProductImage} from './ProductImage/ProductImage';
import {ColorSelection} from './ColorSelection/ColorSelection';

interface ProductItemProps {
  product: Product;
  index: number;
}

export const ProductItem = ({product, index}: ProductItemProps) => {
  const [selectedProductVariant, setSelectedProductVariant] = useState(
    product.variants[0],
  );

    const calculateCurrentPrice = useMemo(() => calculatePriceAfterDiscount(product.retailPrice, product.discount), [product.retailPrice, product.discount]);

  if (product.tag) {
    console.log('product.tag', product.tag);
  } else {
    console.log('product.tag not available');
  }
  return (
    <View style={[styles.container, calculateProductItemMargin(index)]}>
      <ProductImage
        productID={product.id}
        tag={ product.tag }
        selectedProductVariant={selectedProductVariant}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text
            style={[
              styles.retailPrice,
              product.discount ? styles.retailPriceDiscounted : {},
            ]}>
            {getPriceValueWithCurrency(calculateCurrentPrice)}
          </Text>
          {!!product.discount && (
            <Text style={styles.discountPrice}>
              {getPriceValueWithCurrency(product.retailPrice)}
            </Text>
          )}
        </View>
        <View style={styles.colorSelectionContainer}>
          {product.variants.map(productVariant => {
            return (
              <ColorSelection
                key={productVariant.key}
                productVariant={productVariant}
                updateProductVariant={setSelectedProductVariant}
                isSelected={selectedProductVariant.key === productVariant.key}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
