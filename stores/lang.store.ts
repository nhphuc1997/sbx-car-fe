import { create } from 'zustand'
import en from "@/public/lang/en"

export const useLangStore = create((set) => ({
  lang: en,
  setLang: (lang: string) => set(() => ({ lang: lang }))
}))
