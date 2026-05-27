import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import {
  HiOutlineClipboardList,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi";

function StudentDashboard() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  // fetch student tasks
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

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  // stats
  const totalTasks = tasks.length;

  const approvedTasks = tasks.filter(
    (task) =>
      task.status?.toLowerCase() === "approved"
  ).length;

  const pendingTasks = tasks.filter(
    (task) =>
      task.status?.toLowerCase() === "pending"
  ).length;

  return (
    <div className="flex bg-[#f7f3eb] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-5 sm:p-6 lg:p-10 mt-20 lg:mt-0">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>

            <p className="text-[#f59e0b] font-semibold text-base">
              Welcome back 👋
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#1f1f1f] mt-2">
              Student Dashboard
            </h1>

          </div>
        </div>

        {/* STATS */}
        <div className="max-w-3xl px-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">

          {/* TOTAL */}
          <div className="bg-white p-5 rounded-xl border border-[#ece7dd] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

            <div className="w-14 h-14 rounded-xl bg-[#fff4df] flex items-center justify-center">
              <HiOutlineClipboardList className="text-3xl text-[#f59e0b]" />
            </div>

            <h2 className="text-3xl font-bold mt-5 text-[#1f1f1f]">
              {loading ? "..." : totalTasks}
            </h2>

            <p className="text-[#777] mt-1">
              Tasks Submitted
            </p>

          </div>

          {/* PENDING */}
          <div className="bg-white p-5 rounded-xl border border-[#ece7dd] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

            <div className="w-14 h-14 rounded-xl bg-[#fff4df] flex items-center justify-center">
              <HiOutlineClock className="text-3xl text-[#f59e0b]" />
            </div>

            <h2 className="text-3xl font-bold mt-5 text-[#1f1f1f]">
              {loading ? "..." : pendingTasks}
            </h2>

            <p className="text-[#777] mt-1">
              Pending Reviews
            </p>

          </div>

          {/* APPROVED */}
          <div className="bg-white p-5 rounded-xl border border-[#ece7dd] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

            <div className="w-14 h-14 rounded-xl bg-[#fff4df] flex items-center justify-center">
              <HiOutlineCheckCircle className="text-3xl text-[#f59e0b]" />
            </div>

            <h2 className="text-3xl font-bold mt-5 text-[#1f1f1f]">
              {loading ? "..." : approvedTasks}
            </h2>

            <p className="text-[#777] mt-1">
              Approved Tasks
            </p>

          </div>
        </div>

        {/* RECENT SUBMISSIONS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

          {/* LEFT */}
          <div className="xl:col-span-2 bg-white p-6 rounded-xl border border-[#ece7dd] shadow-sm">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-semibold text-[#1f1f1f]">
                Recent Submissions
              </h2>

            </div>

            <div className="mt-6 space-y-4">

              {tasks.length === 0 ? (

                <p className="text-[#777]">
                  No tasks submitted yet.
                </p>

              ) : (

                tasks.slice(0, 4).map((task) => (

                  <div
                    key={task.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-[#f1ece2] rounded-xl p-4 gap-4
                    hover:bg-[#f7f3eb]"
                  >

                    <div>

                      <h3 className="font-semibold text-[#1f1f1f]">
                        {task.title}
                      </h3>

                      <p className="text-sm text-[#777] mt-1">
                        {task.description}
                      </p>

                    </div>

                    <span
                      className={`px-4 py-2 rounded-xl text-sm font-medium w-fit ${task.status === "Approved"
                          ? "bg-[#e8f8ef] text-[#1b8a4b]"
                          : "bg-[#fff4df] text-[#c67c00]"
                        }`}
                    >
                      {task.status}
                    </span>

                  </div>
                ))
              )}

            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#1f1f1f] p-6 rounded-xl text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>

            <p className="text-sm opacity-80 text-[#f8c56b]">
              Submissions
            </p>

            <h2 className="text-2xl font-bold mt-3">
              Keep Submitting Tasks
            </h2>

            <p className="mt-4 text-sm opacity-90 leading-relaxed">
              Your dashboard updates automatically whenever you upload new internship tasks.
            </p>

            <p className="mt-4 text-sm opacity-90 leading-relaxed">
              Check for all your pending tasks.
            </p>

            <p className="mt-4 text-sm opacity-90 leading-relaxed">
              Approved your tasks by admin first
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;