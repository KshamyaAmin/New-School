import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {

  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const role = user?.role;

  // Logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (

    <div className="sidebar">

      {/* Top Section */}
      <div>

        <h1 className="text-3xl font-bold mb-10">
          School App
        </h1>

        <div className="space-y-3">

          {/* ================= TEACHER MENU ================= */}

          {
            role === "teacher" && (
              <>

                <Link
                  to="/teacher/dashboard"
                  className="sidebar-item"
                >
                  Dashboard
                </Link>

                <Link
                  to="/teacher/attendance"
                  className="sidebar-item"
                >
                  Attendance
                </Link>

                <Link
                  to="/teacher/marks"
                  className="sidebar-item"
                >
                  Marks
                </Link>

                <Link
                  to="/teacher/performance"
                  className="sidebar-item"
                >
                  Performance
                </Link>

                <Link
                  to="/teacher/settings"
                  className="sidebar-item"
                >
                  Settings
                </Link>

              </>
            )
          }

          {/* ================= ADMIN MENU ================= */}

          {
            role === "admin" && (
              <>

                <Link
                  to="/admin/dashboard"
                  className="sidebar-item"
                >
                  Dashboard
                </Link>

                <Link
                  to="/admin/students"
                  className="sidebar-item"
                >
                  Students
                </Link>

                <Link
                  to="/admin/add-student"
                  className="sidebar-item"
                >
                  Add Student
                </Link>

                <Link
                  to="/admin/teachers"
                  className="sidebar-item"
                >
                  Teachers
                </Link>

                <Link
                  to="/admin/add-teacher"
                  className="sidebar-item"
                >
                  Add Teacher
                </Link>

                <Link
                  to="/admin/reports"
                  className="sidebar-item"
                >
                  Reports
                </Link>

                <Link
                  to="/admin/notices"
                  className="sidebar-item"
                >
                  Notices
                </Link>

                <Link
                  to="/admin/settings"
                  className="sidebar-item"
                >
                  Settings
                </Link>

              </>
            )
          }

        </div>

      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all"
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;