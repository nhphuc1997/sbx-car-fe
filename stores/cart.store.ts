import { create } from 'zustand'

export const useCartStore = create((set) => ({
  products: [],
  setCart: (product: Record<string, any>) => set((state: any) => ({ products: [...state.products, product] }))
}))
