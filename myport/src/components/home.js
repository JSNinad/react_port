import React from 'react';
import Typed from 'react-typed';

const Home = ({ isOpen }) => {
  return (
    <div id="home" className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
        HELLO I'AM <span style={{ backgroundImage: 'linear-gradient(to right, #ff9a8b, #ff6e7f)', WebkitBackgroundClip: 'text', color: 'transparent' }}>J S NINAD</span>
      </div>
      <section>
        <Typed
          className='text-2xl md:text-3xl lg:text-4xl font-bold italic mb-6'
          strings={['CREATIVE ENGINEER', 'FREELANCER', 'DEVELOPER', 'WRITER', 'EDITOR']}
          typeSpeed={50}
          backSpeed={30}
          backDelay={1000}
          loop
        />
        <div className="relative">
          <img
            src="profile.JPG"  // Replace with the correct path or URL to your image
            alt="Your Name"
            className="moving-image rounded-3xl md:h-64 lg:h-80 xl:h-96 object-cover border-4 border-white shadow-lg md:rounded-full mt-16 lg:hover:transform lg:hover:-translate-y-10 lg:hover:shadow-white lg:transition-transform"
          />
        </div>

        {/* This div will only appear on larger screens (laptops/desktops) */}
        <div className="hidden lg:block absolute top-1/2 right-10 transform -translate-y-1/2" style={{ paddingTop: isOpen ? '72px' : '0px' }}>
          <div className="text-2xl ml-4 md:text-3xl lg:text-4xl font-bold mt-20 mb-6 about-me-hover ">
            ABOUT ME
          </div>
          <p className="text-lg  ml-4 mb-4 mt-8 md:w-1/2">
            Hi, I am J S NINAD

            I am a <span className="text-color">Full Stack Web Developer, Passionate Programmer,</span> Hobbyist Cinematographer, Video Editor, and a travel enthusiast.

            Basically everything you expect a 20-year-old to talk about.

            Currently pursuing the third year of Computer Science engineering in{' '}
            <a href="https://sahyadri.edu.in/" target="_blank" rel="noopener noreferrer" className="sahyadri-color">
              Sahyadri College of engineering and management, Mangaluru.
            </a>
          </p>
          <p className="text-lg ml-4 mb-4 md:w-1/2">
            I have a passion for <span className="text-color">technology</span> and enjoy working on <span className="text-color">innovative projects.</span> My skills include web development, programming, videography, and writing. I believe in the power of creativity to solve problems and make the world a better place.
          </p>
          <p className="text-lg ml-4 mb-4 md:w-1/2">
            Feel free to explore my portfolio and get in touch if you have any questions or if you'd like to collaborate on a project.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
