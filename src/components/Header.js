import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-end items-center">
        
        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-blue-900 text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`
            ${
              menuOpen ? "flex" : "hidden"
            } md:flex
            flex-col md:flex-row
            absolute md:static
            top-full left-0
            w-full md:w-auto
            bg-blue-200 md:bg-transparent
            space-y-4 md:space-y-0
            md:space-x-5
            text-sm
            px-6 md:px-0
            py-4 md:py-0
          `}
        >
          {["home", "about", "skills", "certificates", "contact"].map(
            (item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={600}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-blue-900 font-bold hover:text-blue-700 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
