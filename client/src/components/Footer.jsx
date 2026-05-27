import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  HiOutlineArrowRight,
} from "react-icons/hi";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#f8f6f1] px-6 pt-10 pb-8 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-[#efe7d7] rounded-[40px] px-8 sm:px-12 lg:px-20 py-16 overflow-hidden"
        >

          {/* BACKGROUND BLUR */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#f6d28b] rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            {/* LEFT */}
            <div className="max-w-2xl">
              <p className="uppercase tracking-[3px] text-sm font-semibold text-[#b7791f] mb-5">
                Start Your Journey
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#1f1f1f]">
                Build Smarter Internship
                <br />
                Experiences With InternHub.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#5f5f5f] max-w-xl">
                Simplify internship management, improve collaboration,
                and streamline submissions using one modern platform.
              </p>
            </div>

            {/* BUTTON */}
            <button className="group bg-[#f59e0b] hover:bg-[#e58e09] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg flex items-center gap-3">
              Get Started

              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <HiOutlineArrowRight />
              </span>
            </button>
          </div>
        </motion.div>

        {/* MAIN FOOTER */}
        <div className="grid lg:grid-cols-4 gap-14 pt-24 pb-16">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold tracking-tight text-[#1f1f1f]">
              Intern<span className="text-[#f59e0b]">Hub</span>
            </div>

            <p className="mt-6 text-[#5f5f5f] leading-relaxed">
              Modern internship management platform built for students,
              universities, and organizations.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              {[
                FaInstagram,
                FaLinkedinIn,
                FaTwitter,
                FaGithub,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-2xl bg-[#fffdf9] border border-[#ece7dd] flex items-center justify-center text-[#1f1f1f] hover:bg-[#f59e0b] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#1f1f1f] mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                { name: "Home", to: "home" },
                { name: "Features", to: "features" },
                { name: "About", to: "about" },
                { name: "Testimonials", to: "testimonials" },
                { name: "Contact Us", to: "contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    className="text-[#5f5f5f] hover:text-[#f59e0b] transition-colors duration-300 cursor-pointer w-fit block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PLATFORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#1f1f1f] mb-6">
              Platform
            </h3>

            <ul className="space-y-4">
              {[
                "Dashboard",
                "Task Tracking",
                "Progress Reports",
                "Mentorship",
                "File Uploads",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-[#5f5f5f] hover:text-[#f59e0b] transition-colors duration-300 cursor-pointer w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#1f1f1f] mb-6">
              Stay Updated
            </h3>

            <p className="text-[#5f5f5f] leading-relaxed mb-6">
              Subscribe to receive internship updates and platform news.
            </p>

            {/* INPUT */}
            <div className="flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 border border-[#ddd6ca] bg-[#fffdf9] rounded-lg px-5 py-4 outline-none focus:border-[#f59e0b] transition-all duration-300"
              />

              <button className="bg-[#f59e0b] hover:bg-[#e58e09] text-white px-6 py-4 rounded-lg transition-all duration-300 font-medium">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#e5ded3] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[#5f5f5f] text-sm text-center md:text-left">
            © 2026 InternHub. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-[#5f5f5f]">
            <p className="hover:text-[#f59e0b] transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-[#f59e0b] transition-colors duration-300 cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;