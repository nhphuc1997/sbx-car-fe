import { create } from 'zustand'

export const useOrderStore = create((set) => ({
  orderPayload: null,
  setOrderPayload: (orderPayload: Record<string, any>) => set(() => ({ orderPayload: orderPayload }))
}))
