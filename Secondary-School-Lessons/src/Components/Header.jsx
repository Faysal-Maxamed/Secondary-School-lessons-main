import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const location = useLocation();
  const hideNav = location.pathname === '/login' || location.pathname === '/register';

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          {location.pathname === '/profile' ? 'Profile' : 'Learning Platform'}
        </h1>
        <div className="space-x-4 relative">
          {!hideNav && (
            <>
              <Link to="/" className="hover:text-gray-400">Home</Link>
              <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
              {user ? (
                <>
                  <Link to="/courses" className="hover:text-gray-400">Courses</Link>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        onClick={toggleDropdown}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none"
                        id="options-menu"
                      >
                        <span className="text-white">Menu</span>
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 100 2 1 1 0 000-2zm-4 5a1 1 0 100 2 1 1 0 000-2zm4 5a1 1 0 100 2 1 1 0 000-2zm0-7a1 1 0 100 2 1 1 0 000-2zm4 5a1 1 0 100 2 1 1 0 000-2zm0-7a1 1 0 100 2 1 1 0 000-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {dropdownOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            to="/profile"
                            onClick={handleItemClick}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Profile
                          </Link>
                          <button
                            onClick={() => {
                              handleItemClick();
                              onLogout();
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-gray-400">Login</Link>
                  <Link to="/register" className="hover:text-gray-400">Register</Link>
                </>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
