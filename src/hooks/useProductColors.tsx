import { useCallback } from 'react';
import { useProductStore } from '../stores/product/ProductStore';
import { ColorFilter as ColorFilterType } from '../types/colorFilter';

export const useProductColors = () => {
  const products = useProductStore(state => state.products);

  const getColorFilters = useCallback((): ColorFilterType[] => {
    const colorSet = new Set<string>();
    const colorFilters: ColorFilterType[] = [];

    products.forEach(product => {
      product.variants.forEach(variant => {
        const { color, hexColor } = variant;
        const uniqueColorKey = `${color}-${hexColor}`;

        if (!colorSet.has(uniqueColorKey)) {
          colorSet.add(uniqueColorKey);
          colorFilters.push({ color, colorAsHex: hexColor });
        }
      });
    });

    return colorFilters;
  }, [products]);

  return getColorFilters();
};
