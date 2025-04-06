
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './Categories.style';
import { emptyProductList } from '../../components/ProductList/emptyProductList';
import {ProductItem} from '../../components/ProductItem/productItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/rootStackParams';
import { useProductsHook } from '../../hooks/useFetchedProductsHook';

const Categories = ({ }: NativeStackScreenProps<RootStackParamList, 'CategoriesScreen'>) => {

  const { data, isLoading, isError, isFetching } = useProductsHook();
  console.log('isLoading:', isLoading, ' isFetching:', isFetching);
  if (isLoading) {
    return (
      <SafeAreaView style={styles.fullScreen}>
        <View style={styles.centerContainer}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.fullScreen}>
        <View style={styles.centerContainer}>
          <Text>Error occurred</Text>
        </View>
      </SafeAreaView>
    );
  }
  console.log('Fetched data:', data);
  const products = data || [];

  return (
    <SafeAreaView style={styles.fullScreen}>
      <FlatList
      contentContainerStyle={styles.footer}
      data={products}
      renderItem={item => (
        <ProductItem product={item.item} index={item.index} />
      )}
      keyExtractor={item => `${item.id}`}
      numColumns={2}
      ListEmptyComponent={emptyProductList}
    />
</SafeAreaView>
  );
};

export default Categories;

