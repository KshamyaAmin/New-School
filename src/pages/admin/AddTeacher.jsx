import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function AddTeacher() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Add Teacher" />

        <div className="card max-w-2xl">

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Teacher Name"
              className="w-full border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded-xl"
            />

            <button className="btn-primary">
              Save Teacher
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddTeacher;