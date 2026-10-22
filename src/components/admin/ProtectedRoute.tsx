import { Navigate, useLocation } from "react-router-dom";
import { isAdminAuthed } from "@/lib/content-storage";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  if (!isAdminAuthed()) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }
  return <>{children}</>;
}
