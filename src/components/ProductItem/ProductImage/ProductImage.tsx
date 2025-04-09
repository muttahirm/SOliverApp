import React, {useState, useMemo, useCallback} from 'react';
import { View } from 'react-native';
import {ProductVariant} from '../../../types/product';
import {styles} from './ProductImage.styles';
import { FavoriteIcon } from '../../Button/FavoriteButton/FavoriteButton';
import { CartIcon } from '../../Button/CartButton/CartButton';
import { CachedImage } from '../../CachedImage/CachedImage';
import { OnLoadEvent } from '@d11/react-native-fast-image';

interface ProductImageProps {
  productID: number;
  selectedProductVariant: ProductVariant;
}

export const ProductImage = ({
  productID,
  selectedProductVariant,
}: ProductImageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const defaultRatio = 0.7;
  const aspectRatioWidth = 177;

  const [ratio, setRatio] = useState(defaultRatio);

    const imageStyle = useMemo(
      () => ({ aspectRatio: ratio, width: aspectRatioWidth }),
      [aspectRatioWidth, ratio],
    );

    const onLoad = useCallback(
      (event: OnLoadEvent) => {
        if (defaultRatio) {
          return;
        }

        const { width, height } = event.nativeEvent;

        setRatio(Math.floor((width / height) * 100) / 100);
      },
      [defaultRatio],
    );

  return (
    <View
      onLayout={() => {
        setIsVisible(true);
      }}>
      <FavoriteIcon
        productID={productID}
        selectedProductVariant={selectedProductVariant}
      />
      <CartIcon
        productID={productID}
        selectedProductVariant={selectedProductVariant}
      />

      {isVisible ? (
        // <Image
        //   source={{uri: selectedProductVariant.images[0]}}
        //   style={styles.image}
        //   resizeMode="cover"
        // />
        <CachedImage
        resizeMode={'cover'}
        uri={selectedProductVariant.images[0]}
        priority={'high'}
        style={imageStyle}
        onLoad={onLoad}
      />
      ) : (
        <View style={styles.image} />
      )}
    </View>
  );
};
