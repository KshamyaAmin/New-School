import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Login and Register */
import Login from "./pages/Login";
import Register from "./pages/Register";

/* Protected routing */
import ProtectedRoute from "./components/ProtectedRoute";

/* Admin Pages */
import AdminDashboard from "./pages/admin/Dashboard";
import Students from "./pages/admin/Students";
import AddStudent from "./pages/admin/AddStudent";
import Teachers from "./pages/admin/Teachers";
import AddTeacher from "./pages/admin/AddTeacher";
import Reports from "./pages/admin/Reports";
import AdminNotices from "./pages/admin/Notices";
import AdminSettings from "./pages/admin/Settings";

/* Teacher Pages */
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherAttendance from "./pages/teacher/Attendance";
import TeacherMarks from "./pages/teacher/Marks";
import Performance from "./pages/teacher/Performance";
import TeacherSettings from "./pages/teacher/Settings";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login & Register */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/add-student" element={<AddStudent />} />
          <Route path="/admin/teachers" element={<Teachers />} />
          <Route path="/admin/add-teacher" element={<AddTeacher />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/notices" element={<AdminNotices />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
          <Route path="/teacher" element={<Navigate to="/teacher/dashboard" replace />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/attendance" element={<TeacherAttendance />} />
          <Route path="/teacher/marks" element={<TeacherMarks />} />
          <Route path="/teacher/performance" element={<Performance />} />
          <Route path="/teacher/settings" element={<TeacherSettings />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;