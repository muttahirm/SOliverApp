import {View} from 'react-native';
import React from 'react';
import {styles} from './FilterScreen.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/rootStackParams';
import {ColorFilter} from '../../components/Filter/ColorFilter';
import {SizeFilter} from '../../components/Filter/SizeFilter';
import {PriceFilter} from '../../components/Filter/PriceFilter';
import { useFiltersStore } from '../../stores/filter/FilterStore';
import { Button } from '../../components/Button/Button/Button';

const Filter = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'FilterScreen'>) => {
  const resetFilters = useFiltersStore(state => state.resetFilters);
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.container}>
        <ColorFilter />
        <SizeFilter />
        <PriceFilter />
        <Button onPress={() => navigation.goBack()} title="Apply Filter" />
        <Button onPress={() => {
          resetFilters();
          navigation.goBack();
        }} title="Reset Filter" />
      </View>
    </SafeAreaView>
  );
};

export default Filter;
