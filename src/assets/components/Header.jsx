import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

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
            {isMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
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
  className={`absolute top-[100px] left-0 w-full h-[500px] flex flex-col justify-center items-center shadow-lg md:hidden text-offwhite bg-pantone transition-all duration-300 ease-in-out gap-2 ${
    isMenuOpen ? "flex opacity-100" : "hidden opacity-0"
  }`}
>
  {[
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/explore", label: "Explore" },
    { to: "/contact", label: "Contact" },
  ].map((link) => (
    <li key={link.to} className="w-full">
      <NavLink
        to={link.to}
        onClick={() => setIsMenuOpen(false)}
        className="block w-full px-6 py-5 text-center active:bg-[#ffffff22] active:scale-95 transition-all"
      >
        {link.label}
      </NavLink>
    </li>
  ))}
</ul>

    </header>
  );
};

export default Header;
