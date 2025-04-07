import {Text, View, ScrollView} from 'react-native';
import {styles} from './FilterModal.styles';
import {SizeFilterOption} from './SizeFilterOption';
import {useFilters} from '../../providers/filterProviderContext';
import {Size} from '../../types/product';
import {useProductSizes} from '../../hooks/useProductSizes';

export const SizeFilter = () => {
  const {filters, updateSelectedSizes} = useFilters();
  const currentSizeFilters = useProductSizes();

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
