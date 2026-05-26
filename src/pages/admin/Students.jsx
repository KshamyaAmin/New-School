import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import api from "../../api";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/data/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students", error));
  }, []);

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
                      {student.student_class}
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