import {
    HiOutlineClipboardList,
    HiOutlineChartSquareBar,
    HiOutlineUserGroup,
    HiOutlineCloudUpload,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
} from "react-icons/hi";

const features = [
    {
        icon: <HiOutlineClipboardList />,
        title: "Task Submission",
        description:
            "Allow interns to submit assignments, reports, and project updates through a structured workflow.",
    },
    {
        icon: <HiOutlineChartSquareBar />,
        title: "Progress Tracking",
        description:
            "Monitor internship performance, weekly growth, and completion rates in real time.",
    },
    {
        icon: <HiOutlineUserGroup />,
        title: "Team Collaboration",
        description:
            "Enable mentors and interns to communicate effectively and stay aligned on tasks.",
    },
    {
        icon: <HiOutlineCloudUpload />,
        title: "File Upload System",
        description:
            "Upload documents, presentations, and project files securely inside the platform.",
    },
    {
        icon: <HiOutlineShieldCheck />,
        title: "Secure Authentication",
        description:
            "Protected login and account management using secure authentication workflows.",
    },
    {
        icon: <HiOutlineLightningBolt />,
        title: "Smart Dashboard",
        description:
            "Access submissions, statistics, notifications, and internship updates from one place.",
    },
];

function Features() {
    return (
        <section
            id="features"
            className="bg-[#f8f6f1] pt-8 px-4 sm:px-6 lg:px-8 scroll-mt-28"
        >
            <div className="max-w-7xl mx-auto">

                {/* TOP SECTION */}
                <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">

                    {/* LEFT CONTENT */}
                    <div>
                        {/* Small Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#fffaf0] border border-[#ece7dd] rounded-full px-4 py-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>

                            <p className="text-sm font-medium text-[#5f5f5f]">
                                Platform Features
                            </p>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1f1f1f]">
                            Everything Needed
                            <br />
                            To Manage Modern
                            <br />
                            Internship Programs.
                        </h2>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        <p className="text-lg leading-relaxed text-[#5f5f5f] max-w-xl">
                            Built for universities, startups, and organizations that want
                            a cleaner and more efficient internship workflow — from onboarding
                            interns to tracking submissions and progress.
                        </p>

                        <button className="mt-8 border border-[#d9d4ca] hover:border-[#f59e0b] px-7 py-3 rounded-full transition-all duration-300 font-medium text-[#1f1f1f]">
                            Explore Platform
                        </button>
                    </div>
                </div>

                {/* FEATURE GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 max-w-sm sm:max-w-none mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-[#efe7d7] border border-[#ece7dd] rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
                        >

                            {/* ICON */}
                            <div className="w-16 h-16 rounded-2xl bg-[#f59e0b] text-white flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-2xl font-semibold text-[#1f1f1f] mb-4">
                                {feature.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[#5f5f5f] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;