import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import api from "../../api";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    api.get("/data/dashboard")
      .then((response) => setDashboard(response.data))
      .catch((error) => console.error("Error fetching dashboard data", error));
  }, []);

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Admin Dashboard" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card">
            <h2 className="text-xl font-bold">
              Total Students
            </h2>

            <p className="text-4xl text-blue-600 mt-4">
              {dashboard ? dashboard.total_students : "..."}
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold">
              Total Teachers
            </h2>

            <p className="text-4xl text-blue-600 mt-4">
              {dashboard ? dashboard.total_teachers : "..."}
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold">
              Attendance
            </h2>

            <p className="text-4xl text-blue-600 mt-4">
              {dashboard ? dashboard.attendance : "..."}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
