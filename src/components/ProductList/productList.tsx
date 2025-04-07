import {useMemo, memo } from 'react';
import {FlatList} from 'react-native';
import {ProductItem} from '../ProductItem/productItem';
import {styles} from './productList.styles';
import {Sorting} from '../ProductSortingAndFiltering/productSortingAndFiltering';
import {emptyProductList} from './emptyProductList';
import {sortAndFilterProducts} from '../../utils/sorting';
import {Product} from '../../types/product';
import {usePriceRange} from '../../hooks/useProductPriceRange';
import {useFiltersStore} from '../../stores/filter/FilterStore';

interface ProductListProps {
  selectedSort: Sorting;
  products: Product[] | undefined;
}

export const ProductList = memo((props: ProductListProps) => {
  const {selectedSort, products} = props;
  const filters = useFiltersStore(state => state.filters);
  const priceRange = usePriceRange();



  const sortedProducts = useMemo(() => {
    return sortAndFilterProducts(products, selectedSort, filters, priceRange);
  }, [
    priceRange,
    products,
    selectedSort,
    filters,
  ]);

  return (
    <FlatList
      contentContainerStyle={styles.footer}
      data={sortedProducts}
      renderItem={item => (
        <ProductItem product={item.item} index={item.index} />
      )}
      keyExtractor={item => `${item.id}`}
      numColumns={2}
      ListEmptyComponent={emptyProductList}
    />
  );
});
