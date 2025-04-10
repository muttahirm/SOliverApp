import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/rootStackParams';
import { styles } from './WishList.style';

const WishList = ({}: NativeStackScreenProps<RootStackParamList, 'WishListScreen'>) => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.centerContainer }>
          <Text>Wishlist Screen</Text>
      </View>
      </SafeAreaView>
  );
};

export default WishList;
