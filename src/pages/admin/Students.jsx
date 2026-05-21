import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Students() {

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      class: "5-A"
    },
    {
      id: 2,
      name: "Priya Shetty",
      class: "4-B"
    }
  ];

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Students Directory" />

        <div className="card">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">ID</th>
                <th className="text-left py-3">Name</th>
                <th className="text-left py-3">Class</th>
              </tr>
            </thead>

            <tbody>

              {
                students.map((student) => (

                  <tr key={student.id} className="border-b">

                    <td className="py-4">
                      {student.id}
                    </td>

                    <td className="py-4">
                      {student.name}
                    </td>

                    <td className="py-4">
                      {student.class}
                    </td>

                  </tr>

                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Students;