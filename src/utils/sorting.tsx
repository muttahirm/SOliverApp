
import { Sorting } from '../components/ProductSortingAndFiltering/productSortingAndFiltering';
import { Filters } from '../stores/filter/FilterStore';
import {Product} from '../types/product';
import {calculatePriceAfterDiscount} from './calculatePriceAfterDiscount';

export const sortProducts = (products: Product[] | undefined, sortingType: Sorting,): Product[] => {
  if (!products) {
    return [];
  }

  if (sortingType === 'PRICE_ASC') {
    return [...products].sort(
      (a, b) =>
        calculatePriceAfterDiscount(a.retailPrice, a.discount) -
        calculatePriceAfterDiscount(b.retailPrice, b.discount),
    );
  }

  if (sortingType === 'PRICE_DESC') {
    return [...products].sort(
      (a, b) =>
        calculatePriceAfterDiscount(b.retailPrice, b.discount) -
        calculatePriceAfterDiscount(a.retailPrice, a.discount),
    );
  }

  return products;
};


export const filterProductsByFilters = (
  products: Product[],
  filters: Filters,
  priceRange: {
      min: number,
      max: number,
    },
): Product[] => {

  if (!products) {
    return [];
  }

  let filteredProducts = [...products];

  if (filters.selectedColors.length > 0) {
    filteredProducts = filteredProducts
      .map(product => {
        const filteredVariants = product.variants.filter(variant =>
          filters.selectedColors.includes(variant.color),
        );

        return filteredVariants.length > 0
          ? {...product, variants: filteredVariants}
          : null;
      })
      .filter(Boolean) as Product[];
  }

  if (filters.selectedSizes.length > 0) {
    filteredProducts = filteredProducts
      .map(product => {
        const filteredVariants = product.variants.filter(variant =>
          variant.sizes.some(size => filters.selectedSizes.includes(size)),
        );

        return filteredVariants.length > 0
          ? {...product, variants: filteredVariants}
          : null;
      })
      .filter(Boolean) as Product[];
  }


  if (
    filters.selectedPriceRange[0] > priceRange.min ||
    filters.selectedPriceRange[1] < priceRange.max
  ) {
    filteredProducts = filteredProducts.filter(product => {
      const calculatedRetailPrice = calculatePriceAfterDiscount(
        product.retailPrice,
        product.discount,
      );
      return (
        calculatedRetailPrice >= filters.selectedPriceRange[0] &&
        calculatedRetailPrice <= filters.selectedPriceRange[1]
      );
    });
  }

  return filteredProducts;
};

export const sortAndFilterProducts = (
  products: Product[] | undefined,
  sortingType: Sorting,
  filters: Filters,
  priceRange: {
      min: number,
      max: number,
    },
): Product[] => {
  if (!products) {
    return [];
  }

  let filteredProducts = filterProductsByFilters(products, filters, priceRange);
  return sortProducts(filteredProducts, sortingType);
};
