import React, {memo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './SortingBottomSheet.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {SortingOption} from './SortingOption';
import { Sorting, sortingOptions } from '../ProductSortingAndFiltering/productSortingAndFiltering';

interface SortingBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  updateSorting: (sorting: Sorting) => void;
  selectedSorting: Sorting;
}

export const SortingBottomSheet = memo(({
  isVisible,
  onClose,
  updateSorting,
  selectedSorting,
}: SortingBottomSheetProps) => {
  const selectSort = useCallback(
    (sorting: Sorting) => {
      updateSorting(sorting);
      onClose();
    },
    [updateSorting, onClose],
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.3}
      backdropTransitionOutTiming={1}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sort</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>
        {sortingOptions.map((sortingOption, index) => (
          <SortingOption
            key={`${sortingOption}-${index}`}
            sortingOption={sortingOption}
            updateSorting={selectSort}
            selectedSorting={selectedSorting}
          />
        ))}
      </View>
    </Modal>
  );
});
