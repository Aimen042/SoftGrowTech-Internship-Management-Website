import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import {
  HiOutlineUsers,
  HiOutlineClipboardList,
  HiOutlineClock,
} from "react-icons/hi";
// CHART.JS
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
// REGISTER CHARTS
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function AdminDashboard() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH TASKS
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

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

  // UPDATE STATUS
  const updateStatus = async (id, status) => {

    try {

      // optimistic update
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id
            ? { ...task, status }
            : task
        )
      );

      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/tasks/status",
        {
          id,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    } catch (error) {

      console.log(error);

      fetchTasks();
    }
  };

  // STATISTICS
  const totalTasks = tasks.length;

  const approvedTasks = tasks.filter(
    (task) =>
      task.status?.toLowerCase() === "approved"
  ).length;

  const pendingTasks = tasks.filter(
    (task) =>
      task.status?.toLowerCase() === "pending"
  ).length;

  const rejectedTasks = tasks.filter(
    (task) =>
      task.status?.toLowerCase() === "rejected"
  ).length;

  // UNIQUE USERS
  const uniqueUsers = [
    ...new Set(tasks.map((task) => task.studentId)),
  ];

  const totalUsers = uniqueUsers.length;

  // DOUGHNUT DATA
  const doughnutData = {

    labels: [
      "Approved",
      "Pending",
      "Rejected",
    ],

    datasets: [
      {
        data: [
          approvedTasks,
          pendingTasks,
          rejectedTasks,
        ],

        backgroundColor: [
          "#003d5c",
          "#f59e0b",
          "#c0392b",
        ],

        borderWidth: 0,
      },
    ],
  };

  // BAR DATA
  const barData = {

    labels: [
      "Approved",
      "Pending",
      "Rejected",
    ],

    datasets: [
      {
        label: "Tasks",

        data: [
          approvedTasks,
          pendingTasks,
          rejectedTasks,
        ],

        backgroundColor: [
          "#003d5c",
          "#f59e0b",
          "#c0392b",
        ],

        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="flex bg-[#f7f3eb] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-5 sm:p-6 lg:p-10 mt-20 lg:mt-0">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>

            <p className="text-base text-[#f59e0b] font-semibold">
              Internship Management Panel
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#1f1f1f] mt-2">
              Admin Dashboard
            </h1>

          </div>
        </div>

        {/* STATS */}
        <div className="max-w-3xl px-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">

          {/* USERS */}
          <div className="bg-white p-5 rounded-xl border border-[#ece7dd] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

            <div className="w-12 h-12 rounded-lg bg-[#fff4df] flex items-center justify-center">
              <HiOutlineUsers className="text-3xl text-[#f59e0b]" />
            </div>

            <h2 className="text-2xl font-semibold mt-4 text-[#1f1f1f]">
              {loading ? "..." : totalUsers}
            </h2>

            <p className="text-[#777] mt-1">
              Active Interns
            </p>

          </div>

          {/* TASKS */}
          <div className="bg-white p-5 rounded-xl border border-[#ece7dd] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

            <div className="w-12 h-12 rounded-lg bg-[#fff4df] flex items-center justify-center">
              <HiOutlineClipboardList className="text-3xl text-[#f59e0b]" />
            </div>

            <h2 className="text-2xl font-semibold mt-4 text-[#1f1f1f]">
              {loading ? "..." : totalTasks}
            </h2>

            <p className="text-[#777] mt-1">
              Total Submissions
            </p>

          </div>

          {/* PENDING */}
          <div className="bg-white p-5 rounded-xl border border-[#ece7dd] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

            <div className="w-12 h-12 rounded-lg bg-[#fff4df] flex items-center justify-center">
              <HiOutlineClock className="text-3xl text-[#f59e0b]" />
            </div>

            <h2 className="text-2xl font-semibold mt-4 text-[#1f1f1f]">
              {loading ? "..." : pendingTasks}
            </h2>

            <p className="text-[#777] mt-1">
              Pending Reviews
            </p>

          </div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">

          {/* DOUGHNUT */}
          <div className="bg-white rounded-xl border border-[#ece7dd] p-6 shadow-sm">

            <div className="mb-6">

              <h2 className="text-2xl font-semibold text-[#1f1f1f]">
                Submission Overview
              </h2>

              <p className="text-sm text-[#777] mt-1">
                Task review distribution
              </p>

            </div>

            <div className="h-[320px] flex items-center justify-center">

              <Doughnut
                data={doughnutData}
                options={{

                  responsive: true,

                  maintainAspectRatio: false,

                  plugins: {

                    legend: {
                      position: "bottom",
                    },
                  },

                  cutout: "70%",
                }}
              />

            </div>
          </div>

          {/* BAR CHART */}
          <div className="bg-white rounded-xl border border-[#ece7dd] p-6 shadow-sm">

            <div className="mb-6">

              <h2 className="text-2xl font-semibold text-[#1f1f1f]">
                Review Analytics
              </h2>

              <p className="text-sm text-[#777] mt-1">
                Submission performance summary
              </p>

            </div>

            <div className="h-[320px]">

              <Bar
                data={barData}
                options={{

                  responsive: true,

                  maintainAspectRatio: false,

                  plugins: {

                    legend: {
                      display: false,
                    },
                  },

                  scales: {

                    y: {
                      beginAtZero: true,
                      grid: {
                        color: "#f1ece2",
                      },
                    },

                    x: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                }}
              />

            </div>
          </div>
        </div>

        {/* SUBMISSION TABLE */}
        <div className="bg-white border border-[#ece7dd] rounded-xl shadow-sm mt-10 overflow-hidden">

          {/* TABLE HEADER */}
          <div className="px-6 py-5 border-b border-[#f1ece2]">

            <h2 className="text-2xl font-semibold text-[#1f1f1f]">
              Recent Submissions
            </h2>

          </div>

          {/* MOBILE VIEW */}
          <div className="lg:hidden p-5 space-y-4">

            {tasks.length === 0 ? (

              <div className="text-center py-10 text-[#777]">
                No submissions available yet.
              </div>

            ) : (

              tasks.map((task) => (

                <div
                  key={task.id}
                  className="border border-[#ece7dd] rounded-xl p-4"
                >

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <h3 className="font-semibold text-[#1f1f1f]">
                        {task.title}
                      </h3>

                      <p className="text-sm text-[#777] mt-1">
                        {task.fullName}
                      </p>

                    </div>

                    <span
                      className={`
                        px-3 py-1 rounded-lg text-xs font-medium
                        ${task.status === "Approved"
                          ? "bg-[#e8f8ef] text-[#003d5c]"
                          : task.status === "Rejected"
                            ? "bg-[#ffe8e8] text-[#c0392b]"
                            : "bg-[#fff4df] text-[#c67c00]"
                        }
                      `}
                    >
                      {task.status}
                    </span>

                  </div>

                  <div className="flex gap-3 mt-5">

                    <button
                      onClick={() =>
                        updateStatus(task.id, "Approved")
                      }
                      disabled={task.status === "Approved"}
                      className={`
                        flex-1 py-2 rounded-lg text-sm font-medium transition
                        ${task.status === "Approved"
                          ? "bg-[#e8f8ef] text-[#003d5c]"
                          : "bg-[#003d5c] text-white"
                        }
                      `}
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(task.id, "Rejected")
                      }
                      disabled={task.status === "Rejected"}
                      className={`
                        flex-1 py-2 rounded-lg text-sm font-medium transition
                        ${task.status === "Rejected"
                          ? "bg-[#ffe8e8] text-[#c0392b]"
                          : "bg-[#c0392b] text-white"
                        }
                      `}
                    >
                      Reject
                    </button>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden lg:block overflow-x-auto">

            <table className="w-full">

              <thead className="bg-[#fcfaf6]">

                <tr>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#555]">
                    Student
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#555]">
                    Task
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#555]">
                    Status
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#555]">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {tasks.length === 0 ? (

                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-16 text-[#777]"
                    >
                      No submissions available yet.
                    </td>
                  </tr>

                ) : (

                  tasks.map((task) => (

                    <tr
                      key={task.id}
                      className="border-t border-[#f1ece2] hover:bg-[#fcfaf6] transition"
                    >

                      <td className="px-6 py-5">

                        <div>

                          <h3 className="font-medium text-[#1f1f1f]">
                            {task.fullName}
                          </h3>

                          <p className="text-sm text-[#777]">
                            {task.email}
                          </p>

                        </div>

                      </td>

                      <td className="px-6 py-5">

                        <div>

                          <h3 className="font-medium text-[#1f1f1f]">
                            {task.title}
                          </h3>

                          <p className="text-sm text-[#777] mt-1">
                            {task.description}
                          </p>

                        </div>

                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`
                            px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2
                            ${task.status === "Approved"
                              ? "bg-[#e8f8ef] text-[#003d5c]"
                              : task.status === "Rejected"
                                ? "bg-[#ffe8e8] text-[#c0392b]"
                                : "bg-[#fff4df] text-[#c67c00]"
                            }
                          `}
                        >
                          <span className="w-2 h-2 rounded-full bg-current"></span>

                          {task.status}
                        </span>

                      </td>

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          {/* APPROVE */}
                          <button
                            onClick={() =>
                              updateStatus(task.id, "Approved")
                            }
                            disabled={task.status === "Approved"}
                            className={`
                              px-4 py-2 rounded-lg text-sm font-medium transition
                              ${task.status === "Approved"
                                ? "bg-[#e8f8ef] text-[#003d5c] cursor-not-allowed"
                                : "bg-[#003d5c] hover:bg-[#00344e] text-white"
                              }
                            `}
                          >
                            Approve
                          </button>

                          {/* REJECT */}
                          <button
                            onClick={() =>
                              updateStatus(task.id, "Rejected")
                            }
                            disabled={task.status === "Rejected"}
                            className={`
                              px-4 py-2 rounded-lg text-sm font-medium transition
                              ${task.status === "Rejected"
                                ? "bg-[#ffe8e8] text-[#c0392b] cursor-not-allowed"
                                : "bg-[#c0392b] hover:bg-[#a93226] text-white"
                              }
                            `}
                          >
                            Reject
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))
                )}

              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;