import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Reports() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Reports" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card">
            Attendance Reports
          </div>

          <div className="card">
            Academic Reports
          </div>

          <div className="card">
            Fees Reports
          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;