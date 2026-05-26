import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import api from "../../api";

function Attendance() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/data/students")
      .then((response) => {
        setStudents(
          response.data.map((student) => ({
            ...student,
            status: "Present"
          }))
        );
      })
      .catch((error) => console.error("Error fetching attendance data", error));
  }, []);

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Attendance Management" />

        <div className="card">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Student Name
                </th>

                <th className="text-left py-3">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {
                students.map((student) => (

                  <tr
                    key={student.id}
                    className="border-b"
                  >

                    <td className="py-4">
                      {student.name}
                    </td>

                    <td className="py-4">

                      <select className="border px-3 py-2 rounded-xl">

                        <option>
                          Present
                        </option>

                        <option>
                          Absent
                        </option>

                        <option>
                          Leave
                        </option>

                      </select>

                    </td>

                  </tr>

                ))
              }

            </tbody>

          </table>

          <button className="btn-primary mt-6">
            Save Attendance
          </button>

        </div>

      </div>

    </div>
  );
}

export default Attendance;