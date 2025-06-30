import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AssessmentData, AssessmentResult } from '../types';

interface AppState {
  disclaimerAccepted: boolean;
  currentAssessment: AssessmentData | null;
  assessmentResult: AssessmentResult | null;
  assessmentHistory: AssessmentResult[];
  
  // Actions
  acceptDisclaimer: () => void;
  setCurrentAssessment: (assessment: AssessmentData) => void;
  setAssessmentResult: (result: AssessmentResult) => void;
  clearCurrentAssessment: () => void;
  addToHistory: (result: AssessmentResult) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      disclaimerAccepted: false,
      currentAssessment: null,
      assessmentResult: null,
      assessmentHistory: [],
      
      acceptDisclaimer: () => set({ disclaimerAccepted: true }),
      
      setCurrentAssessment: (assessment) => set({ currentAssessment: assessment }),
      
      setAssessmentResult: (result) => {
        set({ assessmentResult: result });
        // Add to history
        const history = get().assessmentHistory;
        set({ assessmentHistory: [...history, { ...result, timestamp: Date.now() }] });
      },
      
      clearCurrentAssessment: () => set({ 
        currentAssessment: null, 
        assessmentResult: null 
      }),
      
      addToHistory: (result) => {
        const history = get().assessmentHistory;
        set({ assessmentHistory: [...history, { ...result, timestamp: Date.now() }] });
      }
    }),
    {
      name: 'know-your-addict-storage',
      partialize: (state) => ({
        disclaimerAccepted: state.disclaimerAccepted,
        assessmentHistory: state.assessmentHistory
      })
    }
  )
);