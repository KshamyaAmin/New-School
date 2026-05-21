import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Settings() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Settings" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="card">
            Student Management
          </div>

          <div className="card">
            Teacher Management
          </div>

          <div className="card">
            Attendance Settings
          </div>

          <div className="card">
            Fees Management
          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;