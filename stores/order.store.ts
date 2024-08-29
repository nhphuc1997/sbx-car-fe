import { create } from 'zustand'

export const useOrderStore = create((set) => ({
  code: null,
  setCode: (code: string) => set(() => ({ code: code }))
}))
