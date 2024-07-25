// app/admin/page.tsx

import { DeleteButton } from "../components/deleteButton";
import { ProtectedRoute } from "../components/protectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute requiredPermission="index" role="admin">
      <h1>Admin Page</h1>
      <DeleteButton />
      {/* Outros conteúdos da página admin */}
    </ProtectedRoute>
  );
}