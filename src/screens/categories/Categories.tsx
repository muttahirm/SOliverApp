import { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/rootStackParams';

type Article = {
  id: number;
  title: string;
  // Add other fields as needed
};

const Categories = ({}: NativeStackScreenProps<RootStackParamList, 'CategoriesScreen'>) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

const fetchPosts = async () => {
  try {
    const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3001' : 'http://localhost:3001';
    const response = await axios.get(`${baseURL}/products`);
    console.log('Fetched data:', response.data);

    if (Array.isArray(response.data)) {
      setArticles(response.data);
    } else {
      console.warn('Data is not an array:', response.data);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    fetchPosts();
  }, []);

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
          <Text>An error occurred while fetching data.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{JSON.stringify(articles, null, 2)}</Text>
  </View>
</SafeAreaView>
  );
};

export default Categories;

