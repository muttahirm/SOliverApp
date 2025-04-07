import { useMemo } from 'react';
import { Filters } from '../providers/filterProviderContext';
import { Product } from '../types/product';
import { calculatePriceAfterDiscount } from '../utils/calculatePriceAfterDiscount';

export const useFilteredProducts = (
  products: Product[] | undefined,
  filters: Filters,
  priceRange: { min: number; max: number }
): Product[] => {
  return useMemo(() => {
    if (!products) {return [];}

    let filteredProducts = [...products];

    // Filter by selected colors
    if (filters.selectedColors.length > 0) {
      filteredProducts = filteredProducts
        .map((product) => {
          const filteredVariants = product.variants.filter((variant) =>
            filters.selectedColors.includes(variant.color)
          );

          return filteredVariants.length > 0 ? { ...product, variants: filteredVariants } : null;
        })
        .filter(Boolean) as Product[];
    }

    // Filter by selected sizes
    if (filters.selectedSizes.length > 0) {
      filteredProducts = filteredProducts
        .map((product) => {
          const filteredVariants = product.variants.filter((variant) =>
            variant.sizes.some((size) => filters.selectedSizes.includes(size))
          );

          return filteredVariants.length > 0 ? { ...product, variants: filteredVariants } : null;
        })
        .filter(Boolean) as Product[];
    }

    // Filter by price range
    if (
      filters.selectedPriceRange[0] > priceRange.min ||
      filters.selectedPriceRange[1] < priceRange.max
    ) {
      filteredProducts = filteredProducts.filter((product) => {
        const calculatedRetailPrice = calculatePriceAfterDiscount(
          product.retailPrice,
          product.discount
        );
        return (
          calculatedRetailPrice >= filters.selectedPriceRange[0] &&
          calculatedRetailPrice <= filters.selectedPriceRange[1]
        );
      });
    }

    return filteredProducts;
  }, [products, filters, priceRange]);
};
