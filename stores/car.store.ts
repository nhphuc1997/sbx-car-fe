import { create } from 'zustand'

export const useCarStore = create((set) => ({
  car: null,
  setCar: (car: Record<string, any>) => set(() => ({ car: car }))
}))
