import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Performance() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Class Performance" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card">

            <h2 className="text-xl font-bold">
              Average Marks
            </h2>

            <p className="text-4xl text-blue-600 mt-4">
              82%
            </p>

          </div>

          <div className="card">

            <h2 className="text-xl font-bold">
              Top Performer
            </h2>

            <p className="mt-4">
              Rahul Sharma
            </p>

          </div>

          <div className="card">

            <h2 className="text-xl font-bold">
              Attendance Rate
            </h2>

            <p className="text-4xl text-blue-600 mt-4">
              95%
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Performance;