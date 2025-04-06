
import { useMemo, useState} from 'react';
import { UseProductsHook } from '../../hooks/useFetchedProductsHook';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {ProductItem} from '../ProductItem/productItem';
import {styles} from './productList.styles';
import {Sorting} from '../ProductSortingAndFiltering/productSortingAndFiltering';
import { emptyProductList } from './emptyProductList';
import { sortProducts } from '../../utils/sorting';
import {Button} from '../Button/Button';

interface ProductListProps {
  selectedSort: Sorting;
}

export const ProductList = (props: ProductListProps) => {
    const {selectedSort} = props;

    const { data, isLoading, isError, refetch } = UseProductsHook();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const onRefresh = () => {
        setIsRefreshing(true);
        refetch().then(() => setIsRefreshing(false));
    };

    const sortedProducts = useMemo(() => {
        return sortProducts(data, selectedSort);
    }, [data, selectedSort]);

    if (isLoading) {
        return (
            <View>
            <ActivityIndicator size="large" />
            <Text>Products Loading...</Text>
        </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.centerContainer}>
            <Text>Error occurred</Text>
        <Button
          containerStyle={styles.errorButton}
          title="Erneut versuchen"
          onPress={onRefresh}
          disabled={isRefreshing}
        />
        {isRefreshing && (
          <ActivityIndicator style={styles.loadingIndicator} size="large" />
        )}
            </View>
        );
    }

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
 };
