import { useMemo } from 'react';
import { Sorting } from '../components/ProductSortingAndFiltering/productSortingAndFiltering';
import { Product } from '../types/product';
import { calculatePriceAfterDiscount } from '../utils/calculatePriceAfterDiscount';

export const useSortedProducts = (
  products: Product[] | undefined,
  sortingType: Sorting
): Product[] => {
  return useMemo(() => {
    if (!products) {return [];}

    if (sortingType === 'PRICE_ASC') {
      return [...products].sort(
        (a, b) =>
          calculatePriceAfterDiscount(a.retailPrice, a.discount) -
          calculatePriceAfterDiscount(b.retailPrice, b.discount)
      );
    }

    if (sortingType === 'PRICE_DESC') {
      return [...products].sort(
        (a, b) =>
          calculatePriceAfterDiscount(b.retailPrice, b.discount) -
          calculatePriceAfterDiscount(a.retailPrice, a.discount)
      );
    }

    return products;
  }, [products, sortingType]);
};
