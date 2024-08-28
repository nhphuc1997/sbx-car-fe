import { create } from 'zustand'

export const useFilterStore = create((set) => ({
  nameVehicleFilter: null,
  categoryFilter: null,
  colorFilter: null,
  yearFilter: null,
  colorOptions: [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Black", value: "black" },
    { label: "Another", value: "another" },
  ],
  categoryOptions: null,
  setNameVehicleFilter: (value: string) => set(() => ({ nameVehicleFilter: value })),
  setCategyOptions: (value: string) => set(() => ({ categoryOptions: value })),
  setCategoryFilter: (value: string) => set(() => ({ categoryFilter: value })),
  setColorFilter: (value: string) => set(() => ({ colorFilter: value })),
  setYearFilter: (value: string) => set(() => ({ yearFilter: value })),
  resetFilter: () => {
    set(() => ({ nameVehicleFilter: null }))
    set(() => ({ categoryFilter: null }))
    set(() => ({ colorFilter: null }))
    set(() => ({ yearFilter: null }))
  }
}))
