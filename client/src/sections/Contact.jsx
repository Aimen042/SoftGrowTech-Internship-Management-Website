import { motion } from "framer-motion";
import {
    HiOutlineMail,
    HiOutlineLocationMarker,
    HiOutlinePhone,
} from "react-icons/hi";

function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#f8f6f1] py-12 px-6 overflow-hidden scroll-mt-28"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative"
                >

                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#fffaf0] border border-[#ece7dd] rounded-full px-4 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>

                        <p className="text-sm font-medium text-[#5f5f5f]">
                            Contact Us
                        </p>
                    </div>

                    {/* HEADING */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1f1f1f]">
                        Let’s Build Better
                        <br />
                        Internship Experiences
                        <br />
                        Together.
                    </h2>

                    {/* CONTACT INFO */}
                    <div className="mt-12 space-y-5">

                        {/* EMAIL */}
                        <div className="flex items-center gap-5 bg-[#efe7d7] border border-[#ece7dd] rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-[#f59e0b] flex items-center justify-center text-white text-2xl">
                                <HiOutlineMail />
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#1f1f1f]">
                                    Email Address
                                </h4>

                                <p className="text-[#5f5f5f] mt-1">
                                    contact@internhub.com
                                </p>
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className="flex items-center gap-5 bg-[#efe7d7] border border-[#ece7dd] rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-[#f59e0b] flex items-center justify-center text-white text-2xl">
                                <HiOutlinePhone />
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#1f1f1f]">
                                    Phone Number
                                </h4>

                                <p className="text-[#5f5f5f] mt-1">
                                    +92 300 1234567
                                </p>
                            </div>
                        </div>

                        {/* LOCATION */}
                        <div className="flex items-center gap-5 bg-[#efe7d7]  border border-[#ece7dd] rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-[#f59e0b] flex items-center justify-center text-white text-2xl">
                                <HiOutlineLocationMarker />
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#1f1f1f]">
                                    Office Location
                                </h4>

                                <p className="text-[#5f5f5f] mt-1">
                                    Karachi, Pakistan
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BLUR SHAPE */}
                    <div className="absolute top-0 -left-10 w-40 h-40 bg-[#efe7d7] rounded-full blur-3xl opacity-60"></div>
                </motion.div>

                {/* RIGHT FORM */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-[#fffdf9] border border-[#ece7dd] rounded-xl p-5 sm:p-10 shadow-sm"
                >

                    <form className="space-y-6">

                        {/* NAME */}
                        <div>
                            <label className="block text-[#1f1f1f] font-medium mb-3">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-[#e4ddd2] bg-transparent rounded-lg px-5 py-4 outline-none focus:border-[#f59e0b] transition-all duration-300"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block text-[#1f1f1f] font-medium mb-3">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-[#e4ddd2] bg-transparent rounded-lg px-5 py-4 outline-none focus:border-[#f59e0b] transition-all duration-300"
                            />
                        </div>

                        {/* SUBJECT */}
                        <div>
                            <label className="block text-[#1f1f1f] font-medium mb-3">
                                Subject
                            </label>

                            <input
                                type="text"
                                placeholder="Enter subject"
                                className="w-full border border-[#e4ddd2] bg-transparent rounded-lg px-5 py-4 outline-none focus:border-[#f59e0b] transition-all duration-300"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <label className="block text-[#1f1f1f] font-medium mb-3">
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full border border-[#e4ddd2] bg-transparent rounded-lg px-5 py-4 outline-none resize-none focus:border-[#f59e0b] transition-all duration-300"
                            ></textarea>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-[#f59e0b] hover:bg-[#e58e09] text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;