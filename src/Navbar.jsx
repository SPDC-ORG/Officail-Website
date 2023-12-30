import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 ml-10 flex mr-20 flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between mb-4 lg:mb-0"> 
        <div className="flex items-center">
          <img
            className="h-12 pl-5 mr-4"
            src="Images/Logo.png"
            alt="Logo"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isOpen ? (
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Section: Links */}
      <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-end space-y-2 lg:space-y-0 lg:space-x-10">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Product</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Updates</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
