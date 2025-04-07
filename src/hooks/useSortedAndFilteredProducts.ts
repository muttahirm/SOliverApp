import { useSortedProducts } from './useSortedProducts';
import { useFilteredProducts } from './useFilteredProducts';
import { Product } from '../types/product';
import { Sorting } from '../components/ProductSortingAndFiltering/productSortingAndFiltering';
import { Filters } from '../providers/filterProviderContext';

export const useSortedAndFilteredProducts = (
  products: Product[] | undefined,
  sortingType: Sorting,
  filters: Filters,
  priceRange: { min: number; max: number }
): Product[] => {
  const filteredProducts = useFilteredProducts(products, filters, priceRange);
  return useSortedProducts(filteredProducts, sortingType);
};
