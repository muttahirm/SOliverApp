import {View} from 'react-native';
import {styles} from './productSortingAndFiltering.styles';
import {ProductSettingOption} from './ProductSettingOptions';
import { translateSortingOption } from '../../utils/translateSortingOptions';
import { memo } from 'react';

export type Sorting = 'NEW' | 'PRICE_ASC' | 'PRICE_DESC';

export const sortingOptions = ['NEW', 'PRICE_ASC', 'PRICE_DESC'] as const;

interface ProductSortingProps {
  showSorting: () => void;
  showFilter: () => void;
  selectedSorting: Sorting;
}

export const ProductSortingAndFiltering = memo((props: ProductSortingProps) => {
  const {showSorting, showFilter, selectedSorting} = props;
  return (
    <View style={styles.container}>
      <ProductSettingOption
        onPress={showSorting}
        title={translateSortingOption(selectedSorting)}
        icon="sort"
      />
      <ProductSettingOption
        onPress={showFilter}
        title="Filter"
        icon="filter"
      />
    </View>
  );
});
