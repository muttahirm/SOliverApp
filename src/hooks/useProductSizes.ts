import { useCallback } from 'react';
import { useProductStore } from '../stores/product/ProductStore';
import { Size } from '../types/product';

export const useProductSizes = (): Size[] => {
  const products = useProductStore(state => state.products);

  const getSizeFilters = useCallback((): Size[] => {
    const sizeSet = new Set<string>();
    const sizes: Size[] = [];

    products.forEach(product => {
      product.variants.forEach(variant => {
        variant.sizes.forEach(size => {
          if (!sizeSet.has(size)) {
            sizeSet.add(size);
            sizes.push(size);
          }
        });
      });
    });

    return sizes;
  }, [products]);

  return getSizeFilters();
};
