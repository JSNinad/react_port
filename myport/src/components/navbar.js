import React, { useState } from 'react';
import { Menu, X } from 'react-feather';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`p-4 fixed top-0 w-full z-50 lg:bg-gray-800 ${isOpen ? 'bg-opacity-60 backdrop-blur-md' : ''}`}>
      <div className="flex items-center justify-between">
      <div className="text-white font-bold text-lg font-roboto">
  J S NINAD
</div>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`lg:flex space-x-4 ${isOpen ? 'hidden' : 'hidden lg:flex'}`}>
          <a href="#" className="text-white hover:text-gray-500">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            Contact
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4">
          <a href="#" className="block text-white hover:text-gray-500 mb-2">
            Home
          </a>
          <a href="#" className="block text-white hover:text-gray-500 mb-2">
            About
          </a>
          <a href="#" className="block text-white hover:text-gray-500 mb-2">
            Services
          </a>
          <a href="#" className="block text-white hover:text-gray-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
