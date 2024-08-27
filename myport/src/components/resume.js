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

  return (
    <div
      style={{
        position: 'fixed',
        top: `${scrollPosition}px`,
        left: `${scrollPosition}px`,
        width: '100px',
        height: '50px',
        transition: 'top 0.3s ease, left 0.3s ease', // Added easing for smoother movement
        display: isLaptopScreen ? 'block' : 'none', // Hide on smaller screens
      }}
    >
<a href="https://drive.google.com/file/d/14S06k43mEUOIGA2e3FboGcJucKlB7KnM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <img
    src="res.jpeg"
    alt="Rectangular"
    style={{ width: '100%', height: '100%' }}
    className="rounded-full"
  />
</a>

    </div>
  );
};

export default RectangularImage;
