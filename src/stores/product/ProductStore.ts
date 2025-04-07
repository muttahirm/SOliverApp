import { create } from 'zustand';
import { Product } from '../../types/product';

type ProductStore = {
  products: Product[];
  addProducts: (products: Product[] | undefined) => void;
  removeAllProducts: () => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  addProducts: (products) =>
    set(() => ({
      products: products ? [...products] : [],
    })),

  removeAllProducts: () => set({ products: [] }),
}));
