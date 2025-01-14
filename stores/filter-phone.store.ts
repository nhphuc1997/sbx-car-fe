import { create } from 'zustand'

export const useFilterPhoneStore = create((set) => ({
  namePhoneFilter: null,
  categoryFilter: null,
  colorFilter: null,
  colorOptions: [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Black", value: "black" },
    { label: "Another", value: "another" },
  ],
  categoryOptions: null,
  setNamePhoneFilter: (value: string) => set(() => ({ namePhoneFilter: value })),
  setCategyOptions: (value: string) => set(() => ({ categoryOptions: value })),
  setCategoryFilter: (value: string) => set(() => ({ categoryFilter: value })),
  setColorFilter: (value: string) => set(() => ({ colorFilter: value })),
  resetFilter: () => {
    set(() => ({ namePhoneFilter: null }))
    set(() => ({ categoryFilter: null }))
    set(() => ({ colorFilter: null }))
  }
}))
