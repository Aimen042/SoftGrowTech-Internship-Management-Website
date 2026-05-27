import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import About from "../sections/About";
import Testimonial from "../sections/Testimonial";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";


function Home() {
  return (
    <div className="bg-[#f8f6f1]">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;