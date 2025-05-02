import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 container-padding text-offwhite   ${
        scrolled ? "bg-pantone backdrop-blur shadow-md" : "bg-pantone/50"
      }`}
    >
      <div className="flex justify-between items-center py-8 ">
        <div className="text-lg">Omatsola Yarumen</div>
        <nav className="relative">
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          <ul className="hidden md:flex space-x-6 text-lg">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu placed here for full width */}
      <ul
        className={`absolute top-[75px] left-0 w-full h-130 flex flex-col justify-center items-center  shadow-lg md:hidden text-offwhite bg-pantone transition-all duration-300 ease-in-out ${
          isMenuOpen ? "flex opacity-100" : "hidden opacity-0"
        }`}
      >
        <li className="p-8">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li className="p-8">
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li className="p-8">
          <NavLink to="/explore" onClick={() => setIsMenuOpen(false)}>
            Explore
          </NavLink>
        </li>
        <li className="p-8">
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
