// store/useFiltersStore.ts
import { create } from 'zustand';
import { Color, Size } from '../../types/product';

export const MIN_PRICE_FILTER_RANGE = 0;
export const MAX_PRICE_FILTER_RANGE = 1000;

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

export const useFiltersStore = create<FiltersState>((set) => ({
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
}));
