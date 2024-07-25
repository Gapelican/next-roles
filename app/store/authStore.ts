// app/store/authStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Permission = {
  name: string;
  permission: string;
};

interface AuthState {
  token: string | null;
  permissions: Permission[];
  isLoading: boolean;
  setAuth: (token: string, permissions: Permission[]) => void;
  clearAuth: () => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      token: null,
      permissions: [],
      isLoading: true,
      setAuth: (token, permissions) => set({ token, permissions, isLoading: false }),
      clearAuth: () => set({ token: null, permissions: [], isLoading: false }),
      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);