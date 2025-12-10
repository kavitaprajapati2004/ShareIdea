import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const user = localStorage.getItem("currentUser");

  if (!user) {
    alert("Please login or signup first!");
    return <Navigate to="/login" replace />;
  }

  return children;
}
