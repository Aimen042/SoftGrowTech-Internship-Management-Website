import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";

function Sidebar() {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] =
    useState(false);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // logout
  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white border-b border-[#ece7dd] z-40 px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h2 className="text-2xl font-bold text-[#1f1f1f]">
          Intern
          <span className="text-[#f59e0b]">
            Hub
          </span>
        </h2>

        {/* USER INFO */}
        <div className="mt-10 bg-[#f7f3eb] p-5 rounded-2xl">
          <h3 className="font-semibold text-[#1f1f1f]">
            {user?.fullName}
          </h3>

          <p className="text-sm text-[#666] capitalize">
            {user?.role}
          </p>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() =>
            setIsOpen(true)
          }
          className="text-3xl text-[#1f1f1f]"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() =>
            setIsOpen(false)
          }
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          w-72 min-h-screen
          bg-white border-r border-[#e8e2d8]
          p-8
          transition-transform duration-300

          ${isOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }

          lg:translate-x-0
          lg:static
        `}
      >

        {/* MOBILE CLOSE BUTTON */}
        <div className="lg:hidden flex justify-end">

          <button
            onClick={() =>
              setIsOpen(false)
            }
            className="text-3xl text-[#1f1f1f]"
          >
            <HiX />
          </button>
        </div>

        {/* LOGO */}
        <h2 className="text-3xl font-bold text-[#1f1f1f] mt-4 lg:mt-0">
          Intern
          <span className="text-[#f59e0b]">
            Hub
          </span>
        </h2>

        {/* USER INFO */}
        <div className="mt-10 bg-[#f7f3eb] p-5 rounded-2xl">
          <h3 className="font-semibold text-[#1f1f1f]">
            {user?.fullName}
          </h3>

          <p className="text-sm text-[#666] capitalize">
            {user?.role}
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="mt-10 flex flex-col gap-3">

          {/* STUDENT LINKS */}
          {user?.role === "student" && (
            <>
              <Link
                to="/student/dashboard"
                onClick={() =>
                  setIsOpen(false)
                }
                className="px-4 py-3 rounded-xl hover:bg-[#f4edde] transition"
              >
                Dashboard
              </Link>

              <Link
                to="/student/upload-task"
                onClick={() =>
                  setIsOpen(false)
                }
                className="px-4 py-3 rounded-xl hover:bg-[#f4edde] transition"
              >
                Upload Task
              </Link>

              <Link
                to="/student/my-tasks"
                onClick={() =>
                  setIsOpen(false)
                }
                className="px-4 py-3 rounded-xl hover:bg-[#f4edde] transition"
              >
                My Tasks
              </Link>
            </>
          )}

          {/* ADMIN LINKS */}
          {user?.role === "admin" && (
            <>
              <Link
                to="/admin/dashboard"
                onClick={() =>
                  setIsOpen(false)
                }
                className="px-4 py-3 rounded-xl hover:bg-[#f4edde] transition"
              >
                Dashboard
              </Link>

              <Link
                to="/admin/submissions"
                onClick={() =>
                  setIsOpen(false)
                }
                className="px-4 py-3 rounded-xl hover:bg-[#f4edde] transition"
              >
                Submissions
              </Link>
            </>
          )}

        </nav>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="mt-12 w-full bg-[#f59e0b] hover:bg-[#e08e08] text-white py-3 rounded-xl transition"
        >
          Logout
        </button>

      </aside>
    </>
  );
}

export default Sidebar;