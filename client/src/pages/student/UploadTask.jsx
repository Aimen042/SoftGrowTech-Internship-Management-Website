import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { FiUploadCloud } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

function UploadTask() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUTS
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE FILE
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  // SUBMIT TASK
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("file", formData.file);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/tasks/upload",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);

      // RESET FORM
      setFormData({
        title: "",
        description: "",
        file: null,
      });

    } catch (err) {
      console.log(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f3eb] flex flex-col lg:flex-row">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8">

        {/* PAGE HEADER */}
        <div className="mb-8 md:mb-10">

          <p className="
            text-[#f59e0b]
            font-medium
            tracking-wide
            uppercase
            text-xs
            sm:text-sm
          ">
            Internship Portal
          </p>

          <h1 className="
            text-xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#1f1f1f]
            mt-2
            leading-tight
          ">
            Submit Your
            <span className="block">
              Internship Task
            </span>
          </h1>

          <p className="
            text-[#666]
            mt-4
            max-w-xl
            leading-relaxed
            text-sm
            sm:text-base
          ">
            Upload your assigned tasks, reports,
            presentations, or project files for
            admin review and feedback.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="
          grid
          grid-cols-1
          xl:grid-cols-[1.2fr_0.8fr]
          gap-6
          lg:gap-8
        ">

          {/* FORM CARD */}
          <div className="
            bg-white
            rounded-xl
            lg:rounded-xl
            p-5
            sm:p-6
            md:p-8
            lg:p-10
            shadow-sm
            border border-[#eee7da]
          ">

            {/* CARD HEADER */}
            <div className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-4
              mb-8
            ">

              <div className="
                w-14 h-14
                rounded-xl
                bg-[#fef3dc]
                flex
                items-center
                justify-center
                shrink-0
              ">
                <HiOutlineDocumentText className="
                  text-xl
                  text-[#f59e0b]
                " />
              </div>

              <div>
                <h2 className="
                  text-xl
                  sm:text-xl
                  font-semibold
                  text-[#1f1f1f]
                ">
                  Task Details
                </h2>

                <p className="
                  text-sm
                  text-[#777]
                  mt-1
                ">
                  Fill in all required information
                </p>
              </div>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* TITLE */}
              <div>
                <label className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-[#444]
                ">
                  Task Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter task title"
                  value={formData.title}
                  onChange={handleChange}
                  className="
                    w-full
                    border border-[#ddd]
                    rounded-lg
                    px-4 sm:px-5
                    py-3 sm:py-4
                    outline-none
                    text-sm sm:text-base
                    focus:border-[#f59e0b]
                    transition
                  "
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-[#444]
                ">
                  Task Description
                </label>

                <textarea
                  name="description"
                  placeholder="Explain your task submission..."
                  value={formData.description}
                  onChange={handleChange}
                  className="
                    w-full
                    border border-[#ddd]
                    rounded-lg
                    px-4 sm:px-5
                    py-3 sm:py-4
                    h-36 sm:h-40
                    resize-none
                    outline-none
                    text-sm sm:text-base
                    focus:border-[#f59e0b]
                    transition
                  "
                />
              </div>

              {/* FILE UPLOAD */}
              <div>

                <label className="
                  block
                  mb-3
                  text-sm
                  font-medium
                  text-[#444]
                ">
                  Upload File
                </label>

                <label
                  className="
                    border-2 border-dashed border-[#e7dcc7]
                    rounded-lg sm:rounded-lg
                    p-6 sm:p-8
                    flex flex-col
                    items-center
                    justify-center
                    text-center
                    cursor-pointer
                    hover:border-[#f59e0b]
                    hover:bg-[#fffaf0]
                    transition-all duration-300
                  "
                >

                  <FiUploadCloud className="
                    text-4xl sm:text-5xl
                    text-[#f59e0b]
                  " />

                  <h3 className="
                    mt-4
                    text-base sm:text-lg
                    font-semibold
                    text-[#1f1f1f]
                  ">
                    Drag & Drop File
                  </h3>

                  <p className="
                    text-xs sm:text-sm
                    text-[#777]
                    mt-1
                    px-2
                  ">
                    or click to browse from your device
                  </p>

                  {formData.file && (
                    <div className="
                      mt-4
                      bg-[#fef3dc]
                      text-[#1f1f1f]
                      px-4 py-2
                      rounded-full
                      text-xs sm:text-sm
                      break-all
                      max-w-full
                    ">
                      {formData.file.name}
                    </div>
                  )}

                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  bg-[#f59e0b]
                  hover:bg-[#e58d09]
                  text-white
                  py-3 sm:py-4
                  rounded-lg
                  font-medium
                  text-sm sm:text-base
                  transition-all duration-300
                  shadow-md
                  hover:shadow-lg
                  hover:-translate-y-1
                "
              >
                {loading
                  ? "Uploading Task..."
                  : "Submit Task"}
              </button>

            </form>
          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="space-y-6">

            {/* INFO CARD */}
            <div className="
              bg-white
              rounded-lg lg:rounded-xl
              p-5 sm:p-6 md:p-8
              border border-[#eee7da]
              shadow-sm
            ">

              <p className="
                text-[#f59e0b]
                font-medium
                text-xs sm:text-sm
                uppercase
                tracking-wide
              ">
                Submission Tips
              </p>

              <h2 className="
                text-xl sm:text-xl
                font-bold
                text-[#1f1f1f]
                mt-3
                leading-snug
              ">
                Make Your Submission
                Stand Out
              </h2>

              <ul className="
                mt-6
                space-y-4
                text-[#666]
                text-sm sm:text-base
              ">

                <li className="flex gap-3">
                  <span className="text-[#f59e0b]">•</span>
                  Add a clear and meaningful title
                </li>

                <li className="flex gap-3">
                  <span className="text-[#f59e0b]">•</span>
                  Explain your implementation briefly
                </li>

                <li className="flex gap-3">
                  <span className="text-[#f59e0b]">•</span>
                  Upload properly named files
                </li>

                <li className="flex gap-3">
                  <span className="text-[#f59e0b]">•</span>
                  Double-check before submission
                </li>

              </ul>
            </div>

            {/* STATS CARD */}
            <div className="
              bg-[#1f1f1f]
              rounded-xl lg:rounded-xl
              p-5 sm:p-6 md:p-8
              text-white
              relative
              overflow-hidden
            ">

              <p className="
                text-xs sm:text-sm
                uppercase
                tracking-wide
                text-[#f8c56b]
              ">
                Your Progress
              </p>

              <div className="
                mt-8
                grid
                grid-cols-2
                gap-4 sm:gap-5
              ">

                <div>
                  <h3 className="
                    text-xl sm:text-4xl
                    font-bold
                  ">
                    12
                  </h3>

                  <p className="
                    text-xs sm:text-sm
                    text-gray-300
                    mt-2
                  ">
                    Tasks Submitted
                  </p>
                </div>

                <div>
                  <h3 className="
                    text-xl sm:text-4xl
                    font-bold
                  ">
                    8
                  </h3>

                  <p className="
                    text-xs sm:text-sm
                    text-gray-300
                    mt-2
                  ">
                    Approved Tasks
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default UploadTask;