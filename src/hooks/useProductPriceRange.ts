import { useMemo } from 'react';
import { useProductStore } from '../stores/product/ProductStore';

export const usePriceRange = () => {
  const products = useProductStore(state => state.products);

  const priceRange = useMemo(() => {
    if (products.length === 0) {return { min: 0, max: 0 };}

    let minPrice = Infinity;
    let maxPrice = -Infinity;

    products.forEach(product => {
      // Calculate discounted price if discount exists
      const discount = product.discount || 0;
      const actualPrice = product.retailPrice - (product.retailPrice * discount) / 100;

      if (actualPrice < minPrice) {minPrice = actualPrice;}
      if (actualPrice > maxPrice) {maxPrice = actualPrice;}
    });

    return {
      min: minPrice,
      max: maxPrice,
    };
  }, [products]);

  return priceRange;
};
