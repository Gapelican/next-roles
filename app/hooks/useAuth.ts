// app/hooks/useAuth.ts
import { useAuthStore } from '../store/authStore';

export function useAuth() {
  const { token, permissions, isLoading } = useAuthStore();

  return {
    isAuthenticated: !!token,
    isLoading,
    permissions,
  };
}