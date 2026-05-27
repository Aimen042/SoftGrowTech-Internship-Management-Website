import { motion } from "framer-motion";
import HeroImage from "../assets/Hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 min-h-screen bg-[#f8f6f1] pt-32 pb-12 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fffaf0] border border-[#ece7dd] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>

            <p className="text-sm font-medium text-[#5f5f5f]">
              Internship Management Platform
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#1f1f1f]">
            Manage Internships
            <br />
            With Clarity &
            <span className="text-[#f59e0b]"> Confidence.</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-8 text-lg leading-relaxed text-[#5f5f5f] max-w-xl">
            Streamline internship workflows, track student progress,
            manage submissions, and simplify communication — all in one
            modern platform built for students and organizations.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-[#f59e0b] hover:bg-[#e58e09] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-md">
              Get Started
            </button>

            <button className="border border-[#d9d4ca] hover:border-[#f59e0b] px-8 py-4 rounded-full font-medium text-[#1f1f1f] transition-all duration-300">
              Explore Dashboard
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14">
            <div>
              <h3 className="text-3xl font-bold text-[#1f1f1f]">250+</h3>

              <p className="text-[#5f5f5f] mt-1">
                Active Interns
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1f1f1f]">40+</h3>

              <p className="text-[#5f5f5f] mt-1">
                Partner Companies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1f1f1f]">95%</h3>

              <p className="text-[#5f5f5f] mt-1">
                Submission Success
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative bg-[#efe7d7] rounded-[40px] p-8 lg:p-12">
            
            <img
              src={HeroImage}
              alt="Internship"
              className="rounded-[30px] object-cover w-full h-[500px]"
            />

            {/* Floating Card 1 */}
            <div className="absolute -left-10 top-16 bg-[#fffdf9] p-5 rounded-3xl shadow-xl border border-[#ece7dd] w-56">
              <p className="text-sm text-[#5f5f5f]">
                Weekly Progress
              </p>

              <h3 className="text-3xl font-bold mt-2 text-[#1f1f1f]">
                86%
              </h3>

              <div className="w-full h-2 bg-[#ece7dd] rounded-full mt-4">
                <div className="w-[86%] h-full bg-[#f59e0b] rounded-full"></div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-6 bottom-10 bg-[#fffdf9] p-5 rounded-3xl shadow-xl border border-[#ece7dd] w-60">
              <p className="text-sm text-[#5f5f5f]">
                Tasks Submitted
              </p>

              <h3 className="text-2xl font-bold mt-2 text-[#1f1f1f]">
                128 Tasks
              </h3>

              <p className="text-sm mt-3 text-[#f59e0b]">
                +12% this week
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;