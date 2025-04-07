// store/useFiltersStore.ts
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Color, Size } from '../../types/product';
import { zustandStorage } from '../../../storage';

export const MIN_PRICE_FILTER_RANGE = 12.99;
export const MAX_PRICE_FILTER_RANGE = 149.99;

export interface Filters {
  selectedColors: Color[];
  selectedSizes: Size[];
  selectedPriceRange: [number, number];
}

interface FiltersState {
  filters: Filters;
  updateSelectedColors: (colors: Color[]) => void;
  updateSelectedSizes: (sizes: Size[]) => void;
  updateSelectedPriceRange: (range: [number, number]) => void;
  resetFilters: () => void;
}

// Persist the Zustand store using localStorage
export const useFiltersStore = create(
  persist<FiltersState>(
    (set) => ({
      filters: {
        selectedColors: [],
        selectedSizes: [],
        selectedPriceRange: [MIN_PRICE_FILTER_RANGE, MAX_PRICE_FILTER_RANGE],
      },

      updateSelectedColors: (colors: Color[]) =>
        set((state) => ({
          filters: { ...state.filters, selectedColors: colors },
        })),

      updateSelectedSizes: (sizes: Size[]) =>
        set((state) => ({
          filters: { ...state.filters, selectedSizes: sizes },
        })),

      updateSelectedPriceRange: (range: [number, number]) =>
        set((state) => ({
          filters: { ...state.filters, selectedPriceRange: range },
        })),

      resetFilters: () =>
        set(() => ({
          filters: {
            selectedColors: [],
            selectedSizes: [],
            selectedPriceRange: [MIN_PRICE_FILTER_RANGE, MAX_PRICE_FILTER_RANGE],
          },
        })),
    }),
    {
      name: 'filters', // Key to store the state in localStorage
      storage: createJSONStorage(zustandStorage), // Use localStorage as the storage engine
    }
  )
);

