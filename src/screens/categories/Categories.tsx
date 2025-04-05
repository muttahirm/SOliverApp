/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, FlatList, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/rootStackParams';
import { useQuery } from '@tanstack/react-query';

const Categories = ({ }: NativeStackScreenProps<RootStackParamList, 'CategoriesScreen'>) => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3001' : 'http://localhost:3001';
      return axios.get(`${baseURL}/products`);
    },

  });

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{ error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }
  console.log('Fetched data:', data?.data);
  const products = data?.data || [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => `${item.id}`}
        numColumns={2}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => {
          const firstVariant = item.variants?.[0];
          const imageUrl = firstVariant?.images?.[0];

          return (
            <View style={{
              marginBottom: 24,
              backgroundColor: '#fff',
              borderRadius: 12,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 2,
              padding: 12,
            }}>
              {imageUrl && (
                <Image
                  source={{ uri: imageUrl }}
                  style={{ width: '50%', height: 200, borderRadius: 8 }}
                  resizeMode="cover"
                />
              )}
              <Text style={{ marginTop: 12, fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
              <Text>Type: {item.type}</Text>
              <Text>Price: €{item.retailPrice}</Text>
              {item.discount && <Text>Discount: {item.discount}%</Text>}
            </View>
          );
        }}
      />
</SafeAreaView>
  );
};

export default Categories;

