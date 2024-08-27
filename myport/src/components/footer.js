import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-600"></div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <p className="text-lg font-bold mb-2">J S Ninad</p>
              <p>
                <a
                  href="https://maps.app.goo.gl/aB57wESM4P3cbZXn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-gray-400"
                >
                  <span>Jalavalli,</span>
                  <FaMapMarkerAlt size={18} className="ml-1" />
                </a>
              </p>
              <p>Honnavar, Karnataka</p>
              <p>India</p>
            </div>
            <div className="flex items-center justify-center mb-4 lg:mb-0">
              <FiDownload size={24} className="text-white mr-3" />
              <button className=" text-white hover:text-gray-400 py-2 px-4 bg-gray-800 rounded-lg shadow-lg flex items-center">
                <a href="https://drive.google.com/file/d/14S06k43mEUOIGA2e3FboGcJucKlB7KnM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/JSNinad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/j-s-ninad-7169b9228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/+918880738765"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://www.instagram.com/ninad_shettru?igsh=MXdlYThobXNxMHh3aw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
