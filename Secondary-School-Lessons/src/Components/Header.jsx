import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      onLogout();
      navigate('/login');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-yellow-500' : '';
  };

  return (
    <header className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md relative z-20">
      <Link to="/home" className="text-2xl font-bold flex items-center">
        <h1 className="text-blue-500 ml-4">
          Smart
          <span className="text-green-500 ml-4">College</span>
        </h1>

      </Link>
      <nav className="space-x-4 flex items-center">
        <div className="hidden md:flex space-x-8">
          <Link to="/home" className={`hover:text-green-500 ${getLinkClass('/home')}`}>
            Home
          </Link>
          <Link to="/about-us" className={`hover:text-green-500 ${getLinkClass('/about-us')}`}>
            About
          </Link>
          <Link to="/Dashboard" className={`hover:text-green-500 ${getLinkClass('/services')}`}>
            Dashboard
          </Link>


          <Link to="/contact-us" className={`hover:text-green-500 ${getLinkClass('/contact-us')}`}>
            Contact
          </Link>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md hidden md:block"
          >
            Logout
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="block text-gray-800 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={menuOpen ? 'hidden' : 'block'}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={menuOpen ? 'block' : 'hidden'}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-16 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg z-30" ref={menuRef}>
              <Link to="/home" className={`block px-4 py-2 ${getLinkClass('/home')}`}>
                Home
              </Link>
              <Link to="/about-us" className={`block px-4 py-2 ${getLinkClass('/about-us')}`}>
                About
              </Link>


              <Link to="/contact-us" className={`block px-4 py-2 ${getLinkClass('/contact-us')}`}>
                Contact
              </Link>
              {user && (
                <>
                  <Link to="/dashboard" className={`block px-4 py-2 ${getLinkClass('/dashboard')}`}>
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white w-full px-4 py-2 rounded-md"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;


