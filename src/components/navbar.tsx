import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">MyBrand</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            About
          </a>
          <a href="#" className="hover:text-gray-200">
            Services
          </a>
          <Link to={"/login"} className="hover:text-gray-200">
            Login
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
            <a href="#" className="hover:text-gray-200">
              Services
            </a>
            <Link to={"/login"} className="hover:text-gray-200">
              Login
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
