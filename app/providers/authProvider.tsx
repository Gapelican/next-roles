// app/providers/AuthProvider.tsx
'use client';
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setAuth, setLoading } = useAuthStore();

  useEffect(() => {
    // Verificar se há um token armazenado
    const token = localStorage.getItem('auth_token');
    const storedPermissions = localStorage.getItem('auth_permissions');

    if (token && storedPermissions) {
      try {
        const permissions = JSON.parse(storedPermissions);
        setAuth(token, permissions);
      } catch (error) {
        console.error('Failed to parse stored permissions', error);
      }
    }

    setLoading(false);
  }, [setAuth, setLoading]);

  return <>{children}</>;
}