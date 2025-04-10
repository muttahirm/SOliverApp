import {Text, View, ScrollView} from 'react-native';
import {styles} from './Filter.styles';
import {SizeFilterOption} from './SizeFilterOption';
import {Size} from '../../types/product';
import {useProductSizes} from '../../hooks/useProductSizes';
import { useFiltersStore } from '../../stores/filter/FilterStore';

export const SizeFilter = () => {
  const currentSizeFilters = useProductSizes();
    const filters = useFiltersStore(state => state.filters);
    const updateSelectedSizes = useFiltersStore(state => state.updateSelectedSizes);

  const toggleSize = (size: Size) => {
    updateSelectedSizes(
      filters.selectedSizes.includes(size)
        ? filters.selectedSizes.filter(s => s !== size)
        : [...filters.selectedSizes, size],
    );
  };

  return (
    <View style={styles.filterSectionContainer}>
      <Text style={styles.filterTitle}>Size</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContainer}>
        <View style={styles.filterItemsContainer}>
          {currentSizeFilters.map((sizeFilter, index) => (
            <SizeFilterOption
              key={`${sizeFilter}-${index}`}
              sizeFilter={sizeFilter}
              toggleSizeFilter={toggleSize}
              selectedSizeFilters={filters.selectedSizes}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
