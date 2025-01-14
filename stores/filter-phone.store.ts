import { create } from 'zustand'

export const useFilterPhoneStore = create((set) => ({
  namePhoneFilter: null,
  colorPhoneFilter: null,
  colorOptions: [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Black", value: "black" },
    { label: "Another", value: "another" },
  ],
  categoryOptions: [
    { label: 'Apple', value: 'Apple' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Oppo', value: 'Oppo' },
    { label: 'Xiaomi', value: 'Xiaomi' },
    { label: 'Vivo', value: 'Vivo' },
    { label: 'Honor', value: 'Honor' },
    { label: 'Realme', value: 'Realme' },
  ],
  setNamePhoneFilter: (value: string) => set(() => ({ namePhoneFilter: value })),
  setColorFilter: (value: string) => set(() => ({ colorFilter: value })),
  resetFilter: () => {
    set(() => ({ namePhoneFilter: null }))
    set(() => ({ colorPhoneFilter: null }))
  }
}))
