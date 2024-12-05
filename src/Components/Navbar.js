import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkStyles =
    'relative text-white text-base font-medium hover:text-yellow-300 transition duration-300'; // Reduced font size
  const activeLinkStyles = 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-300';

  return (
    <nav className="bg-blue-600 p-4 z-10 relative shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold"><Link to="/">InstituteHub</Link></div> {/* Reduced text size */}

        {/* Regular desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link
              to="/"
              className={`${navLinkStyles} ${location.pathname === '/' ? activeLinkStyles : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className={`${navLinkStyles} ${location.pathname === '/features' ? activeLinkStyles : ''}`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${navLinkStyles} ${location.pathname === '/about' ? activeLinkStyles : ''}`}
            >
              About
            </Link>
          </li>

          {/* Dropdown: More Info */}
          <li className="relative group">
            <span className={`${navLinkStyles} cursor-pointer flex items-center gap-1`}>
              More Info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <div className="absolute left-0 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-20">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link
                    to="/coursesprograms"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/achievements"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Dropdown: Departments */}
          <li className="relative group">
            <span className={`${navLinkStyles} cursor-pointer flex items-center gap-1`}>
              Departments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <div className="absolute left-0 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-20">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link
                    to="/departments/cse"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    CSE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/departments/cseds"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    CSE (DS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/departments/cseaiml"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    CSE (AIML)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/departments/cseaids"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    CSE (AI&DS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/departments/csecs"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    CSE (CS)
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link
              to="/login"
              className={`${navLinkStyles} ${location.pathname === '/login' ? activeLinkStyles : ''}`}
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Hamburger menu button for mobile */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-blue-600 p-4 space-y-2">
          <li>
            <Link to="/" className="block text-white hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="block text-white hover:text-yellow-300">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className="block text-white hover:text-yellow-300">
              About
            </Link>
          </li>

          {/* Dropdown for More Info */}
          <li className="relative group">
            <span className="block text-white hover:text-yellow-300 cursor-pointer">
              More Info
            </span>
            <ul className="hidden group-hover:block bg-white rounded-lg shadow w-44">
              <li>
                <Link to="/coursesprograms" className="block px-4 py-2 hover:bg-gray-100">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="block px-4 py-2 hover:bg-gray-100">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/news" className="block px-4 py-2 hover:bg-gray-100">
                  Events
                </Link>
              </li>
            </ul>
          </li>

          {/* Dropdown for Departments */}
          <li className="relative group">
            <span className="block text-white hover:text-yellow-300 cursor-pointer">
              Departments
            </span>
            <ul className="hidden group-hover:block bg-white rounded-lg shadow w-44">
              <li>
                <Link to="/departments/Cse" className="block px-4 py-2 hover:bg-gray-100">
                  CSE
                </Link>
              </li>
              <li>
                <Link to="/departments/Cseds" className="block px-4 py-2 hover:bg-gray-100">
                  CSE (DS)
                </Link>
              </li>
              <li>
                <Link to="/departments/Cseaiml" className="block px-4 py-2 hover:bg-gray-100">
                  CSE (AIML)
                </Link>
              </li>
              <li>
                <Link to="/departments/Cseaids" className="block px-4 py-2 hover:bg-gray-100">
                  CSE (AI&DS)
                </Link>
              </li>
              <li>
                <Link to="/departments/Csecs" className="block px-4 py-2 hover:bg-gray-100">
                  CSE (CS)
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/login" className="block text-white hover:text-yellow-300">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
