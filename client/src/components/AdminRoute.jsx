import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // not admin
  if (user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;