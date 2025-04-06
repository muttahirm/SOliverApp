import {View} from 'react-native';
import {styles} from './productSortingAndFiltering.styles';
import {ProductSettingOption} from './ProductSettingOptions';
import { translateSortingOption } from '../../utils/translateSortingOptions';

export type Sorting = 'NEW' | 'PRICE_ASC' | 'PRICE_DESC';

export const sortingOptions = ['NEW', 'PRICE_ASC', 'PRICE_DESC'] as const;

interface ProductSortingProps {
  showSorting: () => void;
  selectedSorting: Sorting;
}

export const ProductSortingAndFiltering = (props: ProductSortingProps) => {
  const {showSorting, selectedSorting} = props;
  return (
    <View style={styles.container}>
      <ProductSettingOption
        onPress={showSorting}
        title={translateSortingOption(selectedSorting)}
        icon="sort"
      />
    </View>
  );
};
