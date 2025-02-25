import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track the active section

  useEffect(() => {
    if (!sessionStorage.getItem("hasRefreshed")) {
      sessionStorage.setItem("hasRefreshed", "true");
      window.location.reload();
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Determine which section is currently in view
      const sections = ["home", "about", "experience", "projects", "contact"];
      let currentSection = "home"; // Default to the first section

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Check if the section is in the viewport
          if (rect.top <= 120 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection); // Update the active section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            AG
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`nav-link cursor-pointer hover:text-primary transition-colors duration-200 ${
                  activeSection === link.to ? "!text-primary font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`nav-link block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.to
                      ? "!text-primary font-semibold"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
