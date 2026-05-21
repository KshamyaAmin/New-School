import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function AddStudent() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Add Student" />

        <div className="card max-w-2xl">

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Student Name"
              className="w-full border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Class"
              className="w-full border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Parent Name"
              className="w-full border p-3 rounded-xl"
            />

            <button className="btn-primary">
              Save Student
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddStudent;