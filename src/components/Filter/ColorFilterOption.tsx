import {Pressable, Text, View} from 'react-native';
import {styles} from './FilterModal.styles';
import {Color} from '../../types/product';
import {useMemo} from 'react';
import { ColorFilter } from '../../types/colorFilter';

interface ColorFilterOptionProps {
  colorFilter: ColorFilter;
  toggleColorFilter: (color: Color) => void;
  selectedColorFilters: Color[];
}

export const ColorFilterOption = (porps: ColorFilterOptionProps) => {
  const {colorFilter, toggleColorFilter, selectedColorFilters} = porps;

  const isSelected = useMemo(
    () => selectedColorFilters.includes(colorFilter.color),
    [selectedColorFilters, colorFilter.color],
  );
  return (
    <View style={styles.colorOptionContainer}>
      <Pressable
        style={[
          styles.colorOption,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderColor: isSelected ? 'black' : 'lightgray',
          },
        ]}
        onPress={() => toggleColorFilter(colorFilter.color)}>
        <View
          style={[
            styles.colorOptionInside,
            {backgroundColor: colorFilter.colorAsHex},
          ]}
        />
      </Pressable>
      <Text style={styles.colorTitle}>
        {isSelected
          ? colorFilter.color.toUpperCase()
          : colorFilter.color.toLowerCase()}
      </Text>
    </View>
  );
};
