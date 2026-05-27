import { useState } from "react";
import HeroImage from "../assets/Hero.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    // handle input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // submit login
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5000/api/auth/signup",
                formData
            );

            // store token
            localStorage.setItem("token", res.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            // redirect by role
            if (res.data.user.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/student/dashboard");
            }

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-[#f7f3eb] flex items-center justify-center px-6 py-16">
            <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-xl overflow-hidden shadow-lg">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-[#f4edde] p-12 flex flex-col justify-between relative"
                >
                    <div>
                        <h1 className="text-5xl font-bold leading-tight text-[#1f1f1f]">
                            Welcome Back to{" "}
                            <span className="text-[#f59e0b]">
                                InternHub
                            </span>
                        </h1>

                        <p className="mt-6 text-[#555] text-lg leading-relaxed">
                            Continue managing internship tasks,
                            submissions, and project workflows
                            through your personalized dashboard.
                        </p>
                    </div>

                    {/* image */}
                    <motion.img
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        src={HeroImage}
                        alt="students"
                        className="mt-10 rounded-[30px] h-[350px] object-cover shadow-md"
                    />

                    {/* floating stats */}
                    <div className="absolute bottom-10 right-10 bg-white px-6 py-4 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-[#1f1f1f]">
                            500+
                        </h3>
                        <p className="text-sm text-[#666]">
                            Active Interns
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="p-10 lg:p-16 flex flex-col justify-center"
                >
                    <div className="mb-10">
                        <h2 className="text-4xl font-bold text-[#1f1f1f]">
                            Signup
                        </h2>

                        <p className="text-[#666] mt-3">
                            Access your account securely
                        </p>
                    </div>

                    {/* ERROR */}
                    {error && (
                        <div className="bg-red-100 text-red-600 px-4 py-3 rounded-xl mb-6">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* FULL NAME */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-[#444]">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                className="w-full border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-[#f59e0b] transition"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-[#444]">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                className="w-full border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-[#f59e0b] transition"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-[#444]">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                onChange={handleChange}
                                className="w-full border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-[#f59e0b] transition"
                            />
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-[#f59e0b] hover:bg-[#e08e08] text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-md"
                        >
                            {loading ? "Signing in..." : "Signup"}
                        </button>
                    </form>

                    {/* SIGNUP LINK */}
                    <p className="mt-8 text-[#666] text-center">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-[#f59e0b] font-semibold"
                        >
                            Login
                        </Link>
                    </p>
                    
                    {/* HOME PAGE LINK */}
                    <p className="mt-2 text-[#666] text-center">
                        Back To Home Page?{" "}
                        <Link
                            to="/"
                            className="text-[#f59e0b] font-semibold"
                        >
                            Home
                        </Link>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Signup;