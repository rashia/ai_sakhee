import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  userProfile: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  
  setUserProfile: (profile) => set({ userProfile: profile }),
  
  logout: () => set({ user: null, userProfile: null, isAuthenticated: false }),
  
  setLoading: (loading) => set({ isLoading: loading }),

  // Complete onboarding function
  completeOnboarding: async (onboardingData) => {
    try {
      set({ isLoading: true });

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      
      const response = await fetch(`${apiUrl}/user/onboarding`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies if using sessions
        body: JSON.stringify(onboardingData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Update the user profile with onboarded status
      set((state) => ({
        userProfile: {
          ...state.userProfile,
          ...onboardingData,
          onboarded: true,
        },
        isLoading: false,
      }));

      return { success: true, data: result };
    } catch (error) {
      console.error('Complete onboarding error:', error);
      set({ isLoading: false });
      return { success: false, error: error.message };
    }
  },
}))

export const useUserProfileStore = create((set) => ({
  profile: null,
  onboarded: false,
  preferences: {},

  setProfile: (profile) => set({ profile }),
  setOnboarded: (onboarded) => set({ onboarded }),
  setPreferences: (preferences) => set((state) => ({
    preferences: { ...state.preferences, ...preferences }
  }))
}))

export const useChatStore = create((set) => ({
  messages: [],
  isLoading: false,
  error: null,

  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),

  clearMessages: () => set({ messages: [] }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  
  // Add messages from history
  loadHistory: (messages) => set({ messages }),
  
  // Remove message by ID
  removeMessage: (messageId) => set((state) => ({
    messages: state.messages.filter(m => m.id !== messageId)
  }))
}))

export const useMealStore = create((set) => ({
  currentMealPlan: null,
  mealHistory: [],

  setMealPlan: (plan) => set({ currentMealPlan: plan }),
  addToHistory: (plan) => set((state) => ({
    mealHistory: [...state.mealHistory, plan]
  }))
}))

export const useProgressStore = create((set) => ({
  symptoms: [],
  weight: null,
  measurements: {},

  updateSymptoms: (symptoms) => set({ symptoms }),
  updateWeight: (weight) => set({ weight }),
  updateMeasurements: (measurements) => set({ measurements })
}))