import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the mobile menu when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Toggle hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 container-padding text-offwhite bg-pantone backdrop-blur shadow-md`}
    >
      <div className="flex justify-between items-center py-8 md:py-6 ">
        <div className="text-base">Omatsola Yarumen</div>
        <nav className="relative">
          <button
            onClick={toggleMenu}
            className="md:hidden text-base focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>

          <ul className="hidden md:flex md:space-x-10 space-x-6 text-base">
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
        ref={menuRef}
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
