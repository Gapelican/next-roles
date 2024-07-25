// app/components/ProtectedRoute.tsx
'use client';
import { useAuthStore } from '../store/authStore';
import { usePermission } from '../hooks/usePermission';
import { redirect } from 'next/navigation';

export function ProtectedRoute({
  children,
  requiredPermission,
  role,
}: {
  children: React.ReactNode;
  requiredPermission: string;
  role: string;
}) {
  const { isLoading } = useAuthStore();
  const { hasPermission } = usePermission();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!hasPermission(requiredPermission, role)) {
    redirect('/login');
  }

  return <>{children}</>;
}