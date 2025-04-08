import {Text, View, ScrollView} from 'react-native';
import {styles} from './FilterModal.styles';
import {ColorFilterOption} from './ColorFilterOption';
// import {useFilters} from '../../providers/filterProviderContext';
import {Color} from '../../types/product';
import {useProductColors} from '../../hooks/useProductColors';
import { useFiltersStore } from '../../stores/filter/FilterStore';

export const ColorFilter = () => {
    const filters = useFiltersStore(state => state.filters);
    const updateSelectedColors = useFiltersStore(state => state.updateSelectedColors);
  const currentColorFilters = useProductColors();

  const toggleColor = (color: Color) => {
    updateSelectedColors(
      filters.selectedColors.includes(color)
        ? filters.selectedColors.filter(c => c !== color)
        : [...filters.selectedColors, color],
    );
  };

  return (
    <View style={styles.filterSectionContainer}>
      <Text style={styles.filterTitle}>Color</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContainer}>
        <View style={styles.filterItemsContainer}>
          {currentColorFilters.map((colorFilter, index) => (
            <ColorFilterOption
              key={`${colorFilter.color}-${index}`}
              colorFilter={colorFilter}
              toggleColorFilter={toggleColor}
              selectedColorFilters={filters.selectedColors}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
