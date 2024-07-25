// app/(private)/layout.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../store/authStore';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { token, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !token) {
      router.push('/login');
    }
  }, [token, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return null; // ou um componente de carregamento
  }

  return <>{children}</>;
}