import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-lg">My App</div>
        <ul className="flex space-x-6 text-gray-300">
          <li>
            <a href="#" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;