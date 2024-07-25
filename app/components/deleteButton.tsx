// app/components/DeleteButton.tsx
'use client';
import { usePermission } from '../hooks/usePermission';

export function DeleteButton() {
  const { hasPermission } = usePermission();
  
  if (!hasPermission('delete', 'admin')) {
    return null;
  }

  return <button onClick={() => console.log('Delete')}>Delete</button>;
}