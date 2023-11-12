import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
 <div className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
 HELLO I'AM <span style={{ backgroundImage: 'linear-gradient(to right, #ff9a8b, #ff6e7f)', WebkitBackgroundClip: 'text', color: 'transparent' }}>J S NINAD</span>
      </div>
      
      <Typed
      className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6'
        strings={['CREATIVE ENGINEER', 'FREELANCER', 'DEVELOPER', 'WRITER']}
        typeSpeed={50}
        backSpeed={30}
        backDelay={1000}
        loop
      />

<div className="relative">
<img
  src="profile.jpg"  // Replace with the correct path or URL to your image
  alt="Your Name"
  className="rounded-3xl md:h-64 lg:h-80 xl:h-96 object-cover border-4 border-black shadow-lg md:rounded-full mt-8 hover:transform hover:-translate-y-4 hover:shadow-white transition-transform"
/>

        <div className="animate-circle"></div>
      </div>

      
    </div>

    

    






  );
};

export default Home;
