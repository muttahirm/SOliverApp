import {Pressable, Text} from 'react-native';
import {Size} from '../../types/product';
import {memo, useMemo} from 'react';
import {styles} from './Filter.styles';

interface SizeFilterOptionProps {
  sizeFilter: Size;
  toggleSizeFilter: (color: Size) => void;
  selectedSizeFilters: Size[];
}

export const SizeFilterOption = memo((props: SizeFilterOptionProps) => {
  const {sizeFilter, toggleSizeFilter, selectedSizeFilters} = props;
  const isSelected = useMemo(
    () => selectedSizeFilters.includes(sizeFilter),
    [selectedSizeFilters, sizeFilter],
  );

  return (
    <Pressable
      style={[
        styles.sizeContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {backgroundColor: isSelected ? 'black' : 'white'},
      ]}
      onPress={() => toggleSizeFilter(sizeFilter)}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.sizeTitle, {color: isSelected ? 'white' : 'black'}]}>
        {sizeFilter}
      </Text>
    </Pressable>
  );
});
