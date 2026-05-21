import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Notices() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Notices" />

        <div className="space-y-4">

          <div className="card">
            Parent Meeting on Friday
          </div>

          <div className="card">
            Holiday Announcement
          </div>

        </div>

      </div>

    </div>
  );
}

export default Notices;