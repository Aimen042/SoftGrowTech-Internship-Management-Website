import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Frontend Intern",
    company: "TechNova",
    image: Image1,
    review:
      "The platform made internship submissions and communication incredibly smooth. Everything felt organized and easy to manage.",
  },
  {
    name: "Usman Tariq",
    role: "Software Engineering Student",
    company: "ByteBridge",
    image: Image2,
    review:
      "Tracking weekly progress and receiving mentor feedback became much easier compared to manual workflows.",
  },
  {
    name: "Ayesha Khan",
    role: "UI/UX Intern",
    company: "Vision Labs",
    image: Image3,
    review:
      "The dashboard experience feels modern and intuitive. I could manage tasks and submissions without confusion.",
  },
];

function Testimonial() {
  return (
    <section
      id="testimonials"
      className="bg-[#f8f6f1] px-6 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:sticky top-28"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fffaf0] border border-[#ece7dd] rounded-full px-4 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>

            <p className="text-sm font-medium text-[#5f5f5f]">
              Testimonials
            </p>
          </div>

          {/* HEADING */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1f1f1f]">
            Trusted By Students
            <br />
            And Internship
            <br />
            Coordinators.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg leading-relaxed text-[#5f5f5f] max-w-xl">
            Built to simplify internship workflows for both interns and
            organizations through better communication, submission tracking,
            and centralized management.
          </p>

          {/* STATS */}
          <div className="flex items-center gap-10 mt-12 flex-wrap">

            <div>
              <h3 className="text-4xl font-bold text-[#1f1f1f]">
                4.9
              </h3>

              <div className="flex items-center text-[#f59e0b] mt-2">
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>

              <p className="text-[#5f5f5f] mt-2">
                Average Rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#1f1f1f]">
                1,200+
              </h3>

              <p className="text-[#5f5f5f] mt-2 leading-relaxed">
                Internship submissions
                <br />
                successfully managed
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT TESTIMONIAL GRID */}
        <div className="space-y-8">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className={`bg-[#fffdf9] border border-[#ece7dd] rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index === 1 ? "lg:ml-16" : ""
                } ${index === 2 ? "lg:mr-10" : ""
                }`}
            >

              {/* TOP */}
              <div className="flex items-center gap-5">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="font-semibold text-xl text-[#1f1f1f]">
                    {testimonial.name}
                  </h3>

                  <p className="text-[#5f5f5f] mt-1">
                    {testimonial.role}
                  </p>

                  <p className="text-[#f59e0b] text-sm mt-1 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* REVIEW */}
              <p className="mt-8 text-lg leading-relaxed text-[#5f5f5f]">
                “{testimonial.review}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;