import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Teachers() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Teachers Directory" />

        <div className="card">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Name</th>
                <th className="text-left py-3">Subject</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">
                  Anitha Rao
                </td>

                <td className="py-4">
                  Mathematics
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Teachers;