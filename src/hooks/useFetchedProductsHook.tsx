import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {Product} from '../types/product';
import {fetchProducts} from '../apis/fetchProductsApi';

export const useProductsHook = (): UseQueryResult<Product[], unknown> => {
  return useQuery<Product[], unknown>({
    queryKey: ['product'],
    queryFn: fetchProducts,
  });
};
