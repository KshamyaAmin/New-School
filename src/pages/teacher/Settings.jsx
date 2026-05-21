import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Settings() {

  const teacherSettings = [

    "Update Profile",
    "Manage Class Schedule",
    "View Assigned Subjects",
    "Change Password",
    "Notification Preferences"

  ];

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <Navbar title="Teacher Settings" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {
            teacherSettings.map((item, index) => (

              <div
                key={index}
                className="card hover:bg-blue-50 transition-all duration-300 cursor-pointer"
              >

                <h2 className="text-lg font-semibold text-slate-700">
                  {item}
                </h2>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Settings;