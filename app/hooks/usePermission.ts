// app/hooks/usePermission.ts
import { useAuthStore } from '../store/authStore';

export function usePermission() {
  const permissions = useAuthStore(state => state.permissions);

  function hasPermission(requiredPermission: string, role: string) {
    const userPermission = permissions.find(p => p.name === role);
    if (!userPermission) return false;
    return userPermission.permission.split(',').includes(requiredPermission);
  }

  return { hasPermission };
}