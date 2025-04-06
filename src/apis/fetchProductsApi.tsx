import { Platform } from 'react-native';
import axios from 'axios';
import { Product } from '../types/product';

const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:3001' : 'http://localhost:3001';

const apiService = axios.create({
  baseURL: BASE_URL,
});

export async function fetchProducts(): Promise<Product[]> {
    try {
    const response = await apiService.get('/products');
    return response.data;
  } catch (ex) {
    throw ex;
  }
}
