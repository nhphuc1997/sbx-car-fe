import { create } from 'zustand'

export const useTabStore = create((set) => ({
  tab: 'ALL',
  setTab: (tab: string) => set(() => ({ tab: tab }))
}))
