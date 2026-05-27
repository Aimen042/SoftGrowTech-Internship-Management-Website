import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

function MyTasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:5000/api/tasks/my-tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filtered =
    filter === "All"
      ? tasks
      : tasks.filter(
        (t) =>
          t.status?.toLowerCase() ===
          filter.toLowerCase()
      );

  const statusStyle = (status) => {

    if (
      status?.toLowerCase() === "approved"
    ) {
      return "bg-green-100 text-green-700";
    }

    if (
      status?.toLowerCase() === "rejected"
    ) {
      return "bg-red-100 text-red-600";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="min-h-screen bg-[#f8f6f1] flex flex-col lg:flex-row">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-4 sm:px-6 md:px-10 py-8">

        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>
            <p className="text-[#f59e0b] font-medium tracking-wide uppercase text-xs
            sm:text-sm mb-2">
              Student Workspace
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#1f1f1f] leading-tight">
              My Submitted Tasks
            </h1>
          </div>

          {/* TOTAL TASKS */}
          <div className="bg-[#f59e0b] border-[#ece7dd] px-6 py-4 rounded-lg shadow-sm w-fit">
            <p className="text-sm text-white">
              Total Submissions
            </p>

            <h2 className="text-2xl font-bold text-white mt-1">
              {tasks.length}
            </h2>
          </div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-10">

          {["All", "Pending", "Approved", "Rejected"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
              
              ${filter === f
                  ? "bg-[#1f1f1f] text-white shadow-md"
                  : "bg-white border border-[#ece7dd] text-[#555] hover:border-[#f59e0b] hover:text-[#f59e0b]"
                }
            `}
            >
              {f}
            </button>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 ? (

          <div className="bg-white border border-dashed border-[#e8e2d8] rounded-xl py-24 flex flex-col items-center justify-center text-center">

            <div className="w-20 h-20 rounded-full bg-[#f4edde] flex items-center justify-center text-4xl mb-5">
              📂
            </div>

            <h2 className="text-2xl font-bold text-[#1f1f1f]">
              No Tasks Yet
            </h2>

            <p className="text-[#888] mt-3 max-w-md leading-relaxed">
              Your uploaded internship tasks will appear here once submitted.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {filtered.map((task) => (

              <div
                key={task.id}
                className="
                group
                bg-white/90
                backdrop-blur-sm
                border border-[#ece7dd]
                rounded-xl
                p-6
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
              >

                {/* CARD TOP */}
                <div className="flex items-start justify-between gap-4">

                  {/* LEFT */}
                  <div>

                    {/* TITLE */}
                    <h2 className="text-xl font-bold text-[#1f1f1f] leading-snug">
                      {task.title}
                    </h2>

                    {/* DATE */}
                    <p className="text-sm text-[#aaa] mt-2">
                      Submitted recently
                    </p>

                  </div>

                  {/* STATUS */}
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap
                      ${task.status?.toLowerCase() === "approved"
                        ? "bg-green-100 text-green-700"
                        : task.status?.toLowerCase() === "rejected"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {task.status || "Pending"}
                  </span>

                </div>

                {/* DESCRIPTION */}
                <p className="text-[#666] leading-relaxed mt-5 text-sm sm:text-base">
                  {task.description}
                </p>

                {/* FOOTER */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  {/* FILE BUTTON */}
                  {task.fileUrl ? (
                    <a
                      href={`http://localhost:5000/uploads/${task.fileUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex items-center gap-2
                      bg-[#f4edde]
                      hover:bg-[#f59e0b]
                      hover:text-white
                      text-[#1f1f1f]
                      px-5 py-3
                      rounded-xl
                      text-sm font-medium
                      transition-all duration-300
                      w-fit
                    "
                    >
                      View Uploaded File
                    </a>
                  ) : (
                    <span className="text-sm text-[#aaa]">
                      No file uploaded
                    </span>
                  )}

                  {/* SMALL INFO */}
                  <div className="text-sm text-[#aaa]">
                    Internship Task
                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default MyTasks;