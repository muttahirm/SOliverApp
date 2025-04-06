
import React, { useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './Categories.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/rootStackParams';
import { ProductList } from '../../components/ProductList/productList';
import { ProductSortingAndFiltering, Sorting } from '../../components/ProductSortingAndFiltering/productSortingAndFiltering';
import { SortingBottomSheet } from '../../components/BottomSheet/Sorting/SortingBottomSheet';

const Categories = ({ }: NativeStackScreenProps<RootStackParamList, 'CategoriesScreen'>) => {
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState<Sorting>('NEW');

  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={[styles.fullScreen]}>
      <ProductSortingAndFiltering
        showSorting={() => setSortModalVisible(true)}
        selectedSorting={selectedSorting}
      />
      <ProductList selectedSort={selectedSorting} />

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

