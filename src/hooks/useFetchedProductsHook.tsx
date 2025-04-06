import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {Product} from '../types/product';
import {fetchProducts} from '../apis/fetchProductsApi';

export const UseProductsHook = (): UseQueryResult<Product[], unknown> => {
  return useQuery<Product[], unknown>({
    queryKey: ['product'],
    queryFn: fetchProducts,
  });
};
