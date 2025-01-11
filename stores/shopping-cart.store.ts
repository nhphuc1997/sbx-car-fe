import { create } from 'zustand'

export const useShoppingCartStore = create((set) => ({
  products: [],
  setShoppingCart: (product: Record<string, any>) => set((state: any) => ({ products: [...state.products, product] }))
}))
