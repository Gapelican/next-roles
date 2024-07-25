// app/admin/page.tsx
import { DeleteButton } from "@/app/components/deleteButton";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <DeleteButton />
      {/* Outros conteúdos da página admin */}
    </div>
  );
}