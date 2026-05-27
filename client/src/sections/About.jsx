import { motion } from "framer-motion";
import AboutImage from "../assets/About.avif";
import {
    HiOutlineCheckCircle,
    HiOutlineOfficeBuilding,
    HiOutlineAcademicCap,
} from "react-icons/hi";

function About() {
    return (
        <section
            id="about"
            className="bg-[#f8f6f1] py-12 px-6 overflow-hidden scroll-mt-28"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

                {/* LEFT VISUAL SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative"
                >

                    {/* MAIN IMAGE */}
                    <div className="relative z-10">
                        <img
                            src={AboutImage}
                            alt="Team Discussion"
                            className="rounded-[32px] object-cover w-full h-[520px]"
                        />
                    </div>

                    {/* FLOATING ACHIEVEMENT CARD */}
                    <div className="absolute -left-6 top-10 bg-[#fffdf9] border border-[#ece7dd] rounded-3xl p-5 shadow-xl z-20 w-56">

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#fef3c7] flex items-center justify-center text-[#f59e0b] text-2xl">
                                <HiOutlineAcademicCap />
                            </div>

                            <div>
                                <h3 className="font-bold text-[#1f1f1f]">
                                    500+ Interns
                                </h3>

                                <p className="text-sm text-[#5f5f5f]">
                                    Successfully Managed
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-2 bg-[#ece7dd] rounded-full">
                            <div className="w-[85%] h-full bg-[#f59e0b] rounded-full"></div>
                        </div>
                    </div>

                    {/* FLOATING STATS CARD */}
                    <div className="absolute -bottom-12 -right-4 sm:right-0 bg-[#fffdf9] border border-[#ece7dd] rounded-[28px] p-6 shadow-2xl z-20 w-[260px]">

                        {/* TOP */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className="text-sm text-[#5f5f5f]">
                                    Internship Growth
                                </p>

                                <h3 className="text-3xl font-bold text-[#1f1f1f] mt-1">
                                    +48%
                                </h3>
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-[#fef3c7] flex items-center justify-center">
                                <span className="text-[#f59e0b] text-2xl">↗</span>
                            </div>
                        </div>

                        {/* GRAPH BARS */}
                        <div className="space-y-4">

                            <div>
                                <div className="flex justify-between mb-2 text-sm">
                                    <span className="text-[#5f5f5f]">
                                        Task Completion
                                    </span>

                                    <span className="text-[#1f1f1f] font-medium">
                                        86%
                                    </span>
                                </div>

                                <div className="w-full h-2 bg-[#ece7dd] rounded-full overflow-hidden">
                                    <div className="w-[86%] h-full bg-[#f59e0b] rounded-full"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2 text-sm">
                                    <span className="text-[#5f5f5f]">
                                        Weekly Progress
                                    </span>

                                    <span className="text-[#1f1f1f] font-medium">
                                        72%
                                    </span>
                                </div>

                                <div className="w-full h-2 bg-[#ece7dd] rounded-full overflow-hidden">
                                    <div className="w-[72%] h-full bg-[#d6a354] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM TEXT */}
                        <p className="text-sm text-[#5f5f5f] mt-6 leading-relaxed">
                            Performance analytics updated in real-time for mentors and interns.
                        </p>
                    </div>

                    {/* BACKGROUND SHAPE */}
                    <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#efe7d7] rounded-full blur-3xl opacity-60"></div>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >

                    {/* Small Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#fffaf0] border border-[#ece7dd] rounded-full px-4 py-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>

                            <p className="text-sm font-medium text-[#5f5f5f]">
                                About Us
                            </p>
                        </div>

                    {/* HEADING */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1f1f1f]">
                        Simplifying Internship
                        <br />
                        Management For Modern
                        <br />
                        Organizations.
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-8 text-lg leading-relaxed text-[#5f5f5f]">
                        Our platform helps institutions and companies streamline
                        internship workflows through centralized communication,
                        task tracking, progress monitoring, and performance insights.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#5f5f5f]">
                        Designed with usability and collaboration in mind, the system
                        creates a smooth experience for interns, mentors, and administrators.
                    </p>

                    {/* FEATURE POINTS */}
                    <div className="mt-10 space-y-6">

                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-[#f59e0b] text-2xl">
                                <HiOutlineCheckCircle />
                            </div>

                            <div>
                                <h4 className="font-semibold text-xl text-[#1f1f1f]">
                                    Centralized Internship Workflow
                                </h4>

                                <p className="text-[#5f5f5f] mt-2 leading-relaxed">
                                    Manage onboarding, submissions, and evaluations from
                                    one organized dashboard.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-[#f59e0b] text-2xl">
                                <HiOutlineOfficeBuilding />
                            </div>

                            <div>
                                <h4 className="font-semibold text-xl text-[#1f1f1f]">
                                    Built For Universities & Startups
                                </h4>

                                <p className="text-[#5f5f5f] mt-2 leading-relaxed">
                                    Flexible architecture suitable for educational and
                                    professional internship programs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA BUTTON */}
                    <button className="mt-12 bg-[#f59e0b] hover:bg-[#e58e09] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-md">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default About;