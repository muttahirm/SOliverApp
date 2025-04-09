import React, {useState, useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './Categories.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../types/rootStackParams';
import {ProductList} from '../../components/ProductList/productList';
import {
  ProductSortingAndFiltering,
  Sorting,
} from '../../components/ProductSortingAndFiltering/productSortingAndFiltering';
import {SortingBottomSheet} from '../../components/Sorting/SortingBottomSheet';
import {UseProductsHook} from '../../hooks/useFetchedProductsHook';
import {Button} from '../../components/Button/Button/Button';
import {useProductStore} from '../../stores/product/ProductStore';

const Categories = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CategoriesScreen'>) => {
  const {data, isLoading, isError, refetch} = UseProductsHook();
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState<Sorting>('NEW');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const addProducts = useProductStore(state => state.addProducts);

  useEffect(() => {
    if (data) {
      addProducts(data);
    }
  }, [data, addProducts]);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    refetch().then(() => setIsRefreshing(false));
  }, [setIsRefreshing, refetch]);

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator style={styles.loadingIndicator} size="large" />
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
          title="Try again"
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
    <SafeAreaView style={styles.fullScreen}>
      <View style={[styles.fullScreen]}>
        <ProductSortingAndFiltering
          showSorting={() => setSortModalVisible(true)}
          showFilter={() => {
            navigation.navigate('FilterScreen');
          }}
          selectedSorting={selectedSorting}
        />
        <ProductList selectedSort={selectedSorting} products={data} />

        <SortingBottomSheet
          isVisible={sortModalVisible}
          onClose={() => setSortModalVisible(false)}
          updateSorting={setSelectedSorting}
          selectedSorting={selectedSorting}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
