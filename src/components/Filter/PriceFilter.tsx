import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {styles} from './FilterModal.styles';
import {getPriceValueWithCurrency} from '../../utils/getPriceValueWithCurrency';
import {usePriceRange} from '../../hooks/useProductPriceRange';
import { useFiltersStore } from '../../stores/filter/FilterStore';

export const PriceFilter = () => {
  const priceRange = usePriceRange();
    const filters = useFiltersStore(state => state.filters);
    const updateSelectedPriceRange = useFiltersStore(state => state.updateSelectedPriceRange);

  const [range, setRange] = useState([
    priceRange.min,
    priceRange.max,
  ]);

    const togglePrice = (pr: [number, number]) => {
        console.log('price Range', priceRange);
    updateSelectedPriceRange(pr);
  };

    const sliderWidth = Dimensions.get('window').width - 70;
    console.log('getPriceValueWithCurrency =', getPriceValueWithCurrency(
          range[0],
    ));
     console.log('range[0] =',
          range[0],
        );
  return (
    <View style={styles.filterSectionContainer}>
      <Text style={styles.filterTitle}>Price</Text>
      <View style={styles.priceFilterContainer}>
        <Text>{`${getPriceValueWithCurrency(
          range[0],
        )} to ${getPriceValueWithCurrency(range[1])}`}</Text>
        <MultiSlider
          values={[
            filters.selectedPriceRange[0],
            filters.selectedPriceRange[1],
          ]}
          sliderLength={sliderWidth}
          onValuesChange={values => setRange(values)}
          onValuesChangeFinish={values => togglePrice([values[0], values[1]])}
          min={priceRange.min}
          max={priceRange.max}
          step={1}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={40}
          markerStyle={styles.sliderMarker}
          selectedStyle={styles.sliderSelectedTrack}
        />
      </View>
    </View>
  );
};
