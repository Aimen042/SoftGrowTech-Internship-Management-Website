import { Routes, Route } from "react-router-dom";

/* PUBLIC PAGES */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* STUDENT */
import StudentDashboard from "./pages/student/StudentDashboard";
import UploadTask from "./pages/student/UploadTask";
import MyTasks from "./pages/student/MyTasks";

/* ADMIN */
import AdminDashboard from "./pages/admin/AdminDashboard";
import Submissions from "./pages/admin/Submissions";

/* PROTECTED ROUTES */
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      {/* STUDENT ROUTES */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/upload-task"
        element={
          <ProtectedRoute>
            <UploadTask />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/my-tasks"
        element={
          <ProtectedRoute>
            <MyTasks />
          </ProtectedRoute>
        }
      />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/submissions"
        element={
          <AdminRoute>
            <Submissions />
          </AdminRoute>
        }
      />

    </Routes>
  );
}

export default App;