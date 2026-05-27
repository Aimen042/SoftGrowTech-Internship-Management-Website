import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   const navigate = useNavigate();

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Features", to: "features" },
    { name: "About", to: "about" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#f8f6f1]/80 backdrop-blur-md shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-2xl font-bold tracking-tight text-[#1f1f1f] cursor-pointer">
          Intern<span className="text-[#f59e0b]">Hub</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={-100}
                activeClass="text-[#f59e0b]"
                className="cursor-pointer text-[#3b3b3b] hover:text-[#f59e0b] transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">

          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-[#f59e0b] hover:bg-[#e58e09] text-white px-6 py-3 rounded-full"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="hidden md:block border border-[#f59e0b] text-[#f59e0b] px-6 py-3 rounded-full"
          >
            Signup
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-[#1f1f1f]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="bg-[#f8f6f1] px-6 py-8 shadow-lg border-t border-[#ece7dd]">

          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-90}
                  onClick={() => setIsOpen(false)}
                  activeClass="text-[#f59e0b]"
                  className="block text-lg font-medium text-[#3b3b3b] hover:text-[#f59e0b] transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button className="mt-8 w-full bg-[#f59e0b] hover:bg-[#e58e09] text-white py-3 rounded-full font-medium transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;