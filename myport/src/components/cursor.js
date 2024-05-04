import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseClick = (e) => {
      const splash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setSplashes((prevSplashes) => [...prevSplashes, splash]);

      setTimeout(() => {
        setSplashes((prevSplashes) => prevSplashes.filter((item) => item.id !== splash.id));
      }, 1000);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          pointerEvents: 'none',
          zIndex: '9999',
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      ></div>
      
      {/* Splash effect */}
      {splashes.map((splash) => (
        <div
          key={splash.id}
          style={{
            position: 'fixed',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            pointerEvents: 'none',
            animation: 'splashAnimation 1s ease-out forwards',
            top: `${splash.y}px`,
            left: `${splash.x}px`,
          }}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;
