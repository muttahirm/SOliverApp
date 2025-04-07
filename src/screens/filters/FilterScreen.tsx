import {View} from 'react-native';
import React from 'react';
import {styles} from './FilterScreen.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/rootStackParams';
import {ColorFilter} from '../../components/Filter/ColorFilter';
import {SizeFilter} from '../../components/Filter/SizeFilter';
import {PriceFilter} from '../../components/Filter/PriceFilter';
import {ButtonApplyFilters} from '../../components/Button/ButtonApplyFilters';

const Filter = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'FilterScreen'>) => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View>
        <ColorFilter />
        <SizeFilter />
        <PriceFilter />
        <ButtonApplyFilters onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default Filter;
