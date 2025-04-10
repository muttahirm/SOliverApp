import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './productSortingAndFiltering.styles';
import { memo } from 'react';

interface ProductSettingOptionProps {
  onPress: () => void;
  title: string;
  icon: string;
}

export const ProductSettingOption = memo((props: ProductSettingOptionProps) => {
  const {onPress, title, icon} = props;

  return (
    <TouchableOpacity style={styles.filterContainer} onPress={onPress}>
      <Icon name={icon} size={18} color="black" />
      <Text style={styles.filterText}>{title}</Text>
    </TouchableOpacity>
  );
});
