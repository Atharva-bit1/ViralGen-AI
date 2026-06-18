import { create } from 'zustand'

export type PersonaType = 'professional' | 'witty' | 'urgent'
export type PlatformType = 'instagram' | 'linkedin' | 'facebook'

interface AppState {
  prompt: string
  setPrompt: (prompt: string) => void
  
  persona: PersonaType
  setPersona: (persona: PersonaType) => void
  
  platform: PlatformType
  setPlatform: (platform: PlatformType) => void
  
  variations: number
  setVariations: (variations: number) => void
  
  isDark: boolean
  setIsDark: (isDark: boolean) => void
  
  isGenerating: boolean
  setIsGenerating: (isGenerating: boolean) => void
  
  jobId: string
  setJobId: (jobId: string) => void
  
  currentVariation: number
  setCurrentVariation: (variation: number) => void
}

export const useAppStore = create<AppState>((set) => ({
  prompt: '',
  setPrompt: (prompt) => set({ prompt }),
  
  persona: 'professional',
  setPersona: (persona) => set({ persona }),
  
  platform: 'instagram',
  setPlatform: (platform) => set({ platform }),
  
  variations: 1,
  setVariations: (variations) => set({ variations }),
  
  isDark: false,
  setIsDark: (isDark) => set({ isDark }),
  
  isGenerating: false,
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  
  jobId: '',
  setJobId: (jobId) => set({ jobId }),
  
  currentVariation: 0,
  setCurrentVariation: (currentVariation) => set({ currentVariation }),
}))
