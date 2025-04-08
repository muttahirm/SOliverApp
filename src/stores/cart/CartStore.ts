import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CartItem {
  productId: number;
  variantId: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (productId: number, variantId: number, quantity?: number) => void;
  removeFromCart: (productId: number, variantId: number) => void;
  updateQuantity: (productId: number, variantId: number, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: number, variantId: number) => number;
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: [],

      addToCart: (productId, variantId, quantity = 1) => {
        const { cart } = get();
        const existingItem = cart.find(
          item => item.productId === productId && item.variantId === variantId
        );

        const updatedCart = existingItem
          ? cart.map(item =>
              item.productId === productId && item.variantId === variantId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          : [...cart, { productId, variantId, quantity }];

        set({ cart: updatedCart });
      },

      removeFromCart: (productId, variantId) => {
        set(state => ({
          cart: state.cart.filter(
            item => !(item.productId === productId && item.variantId === variantId)
          ),
        }));
      },

      updateQuantity: (productId, variantId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, variantId);
          return;
        }

        set(state => ({
          cart: state.cart.map(item =>
            item.productId === productId && item.variantId === variantId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      getItemQuantity: (productId, variantId) => {
        const item = get().cart.find(
          i => i.productId === productId && i.variantId === variantId
        );
        return item ? item.quantity : 0;
      },
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
