
import { useMemo, memo } from 'react';
import { FlatList } from 'react-native';
import {ProductItem} from '../ProductItem/productItem';
import {styles} from './productList.styles';
import {Sorting} from '../ProductSortingAndFiltering/productSortingAndFiltering';
import { emptyProductList } from './emptyProductList';
import { sortAndFilterProducts } from '../../utils/sorting';
import { Product } from '../../types/product';
import { useFilters } from '../../providers/filterProviderContext';
import { usePriceRange } from '../../hooks/useProductPriceRange';

interface ProductListProps {
    selectedSort: Sorting;
    products: Product[] | undefined;
}

export const ProductList = memo((props: ProductListProps) => {
    const { selectedSort, products } = props;
     const {filters} = useFilters();
    const priceRange = usePriceRange();
    console.log('priceRange', priceRange);

    const sortedProducts = useMemo(() => {
        return sortAndFilterProducts(products, selectedSort, filters, priceRange);
    }, [products, selectedSort, filters, priceRange]);

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
