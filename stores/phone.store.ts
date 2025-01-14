import { create } from 'zustand'

export const usePhoneStore = create((set) => ({
  phone: null,
  setPhone: (phone: Record<string, any>) => set(() => ({ phone: phone }))
}))
