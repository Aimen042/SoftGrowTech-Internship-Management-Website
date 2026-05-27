import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

function Submissions() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/tasks/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-[#e8f5ee] text-[#1b8a4b]";
      case "Rejected":
        return "bg-[#fde8e8] text-[#c0392b]";
      default:
        return "bg-[#fff4df] text-[#c67c00]";
    }
  };

  return (

    <div className="min-h-screen bg-[#f8f6f1] flex flex-col lg:flex-row">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="w-full flex px-4 sm:px-6 md:px-10 py-8">

        <div className="px-4 sm:px-8">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
              All Submissions
            </h1>

            <p className="text-sm text-[#777] mt-1">
              Track all uploaded internship tasks
            </p>
          </div>

          {/* GRID */}
          {loading ? (
            <div className="text-[#777]">Loading submissions...</div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {tasks.map((task, index) => (
                <div
                  key={task.id}
                  className="bg-white border border-[#ece7dd] rounded-xl p-5 shadow-sm
              transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{
                    animation: `fadeUp 0.4s ease ${index * 0.05}s both`,
                  }}
                >

                  {/* TITLE */}
                  <h2 className="text-lg font-semibold text-[#1f1f1f]">
                    {task.title}
                  </h2>

                  {/* NAME */}
                  <p className="text-sm text-[#777] mt-1">
                    <span className="text-sm text-black">Submitted By: </span> {task.fullName}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-[#555] mt-3 line-clamp-3">
                    {task.description}
                  </p>

                  {/* STATUS */}
                  <div className="mt-4 flex items-center justify-between">

                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${getStatusStyle(
                        task.status
                      )}`}
                    >
                      {task.status}
                    </span>

                    <span className="text-xs text-[#999]">
                      ID: {task.id}
                    </span>

                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ANIMATION STYLE */}
          <style>
            {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
          </style>
        </div>

      </main>

    </div>
  );
}

export default Submissions;