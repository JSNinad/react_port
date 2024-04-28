// Navbar.js

import React, { useState } from 'react';
import { Menu, X } from 'react-feather';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    toggleNavbar(); // Close the navbar after clicking on a link
  };

  return (
    <nav className={`p-4 fixed top-0 w-full z-50 lg:bg-gray-800 ${isOpen ? 'bg-opacity-60 backdrop-blur-md' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="text-red-500 font-bold italic text-lg">
        J  S NINAD
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`lg:flex space-x-4 ${isOpen ? 'hidden' : 'hidden lg:flex'}`}>
          <button
            className="text-white hover:text-gray-500"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          {/* <button
            className="text-white hover:text-gray-500"
            onClick={() => scrollToSection('about-me')}
          >
            About Me
          </button> */}
          <button
            className="text-white hover:text-gray-500"
            onClick={() => scrollToSection('Tech')}
          >
            TechStack
          </button>
          <button
            className="text-white hover:text-gray-500"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4">
          <button
            className="block text-white hover:text-red-500 mb-2"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button
            className="block text-white hover:text-red-500 mb-2"
            onClick={() => scrollToSection('about-me')}
          >
            About Me
          </button>
          <button
            className="block text-white hover:text-red-500"
            onClick={() => scrollToSection('Tech')}
          >
            TechStack
          </button>
         
          <button
            className="text-white hover:text-red-500"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>

          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
