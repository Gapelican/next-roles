// app/providers/AuthProvider.tsx
'use client';
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setAuth, setLoading, isLoading } = useAuthStore();

  useEffect(() => {
    async function loadAuthData() {
      try {
        const response = await fetch('/api/auth/login');
        const data = await response.json();
        setAuth(data.token, data.permission);
      } catch (error) {
        console.error('Failed to load auth data', error);
        setLoading(false);
      }
    }

    if (isLoading) {
      loadAuthData();
    }
  }, [setAuth, setLoading, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}