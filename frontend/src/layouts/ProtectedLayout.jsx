import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/authContext";

export default function ProtectedLayout() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
