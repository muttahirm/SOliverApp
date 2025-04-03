import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/rootStackParams';

const WishList = ({}: NativeStackScreenProps<RootStackParamList, 'WishListScreen'>) => {
  return (
      <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'} }>
          <Text>Wishlist Screen</Text>
      </View>
      </SafeAreaView>
  );
};

export default WishList;
