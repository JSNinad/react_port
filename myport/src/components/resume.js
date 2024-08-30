import React, { useEffect, useState } from 'react';

const RectangularImage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLaptopScreen, setIsLaptopScreen] = useState(window.innerWidth > 768); // Assuming laptop screen width

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollPosition(scrolled);
    };

    const handleResize = () => {
      setIsLaptopScreen(window.innerWidth > 768); // Adjust width based on laptop screen
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate transform properties based on scroll position
  const transformStyle = {
    transform: `translate(${scrollPosition * 0.1}px, ${scrollPosition * 0.1}px) rotate(${scrollPosition * 0.05}deg) scale(${1 + scrollPosition * 0.0005})`,
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px', // Starting position
        left: '20px', // Starting position
        width: '100px',
        height: '50px',
        transition: 'transform 0.3s ease', // Smooth animation for transform
        display: isLaptopScreen ? 'block' : 'none', // Hide on smaller screens
        ...transformStyle, // Apply transform styles
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Add shadow for depth
        opacity: `${1 - scrollPosition * 0.001}`, // Decrease opacity as the user scrolls down
      }}
    >
      <a href="https://drive.google.com/file/d/1b1OMDQkyxx-QwAp7RUCvZESiioGJJCEQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <img
          src="res.jpeg"
          alt="Rectangular"
          style={{ width: '100%', height: '100%', borderRadius: '8px', transition: 'filter 0.3s ease' }} // Added border-radius and transition for hover
          className="hover:filter hover:brightness-125" // Brighten image on hover
        />
      </a>
    </div>
  );
};

export default RectangularImage;
