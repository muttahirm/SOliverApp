import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Favorite {
  productId: number;
  variantId: number;
}

interface FavoritesState {
  favorites: Favorite[];
  toggleFavorite: (productId: number, variantId: number) => void;
  isFavorite: (productId: number, variantId: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create(
  persist<FavoritesState>(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (productId: number, variantId: number) => {
        const { favorites } = get();
        const exists = favorites.some(
          fav => fav.productId === productId && fav.variantId === variantId
        );

        const updatedFavorites = exists
          ? favorites.filter(
              fav => !(fav.productId === productId && fav.variantId === variantId)
            )
          : [...favorites, { productId, variantId }];

        set({ favorites: updatedFavorites });
      },

      isFavorite: (productId: number, variantId: number) => {
        return get().favorites.some(
          fav => fav.productId === productId && fav.variantId === variantId
        );
      },

      clearFavorites: () => {
        set({ favorites: [] });
      },
    }),
    {
      name: 'favorites',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
