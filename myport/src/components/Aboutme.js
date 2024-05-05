import React from 'react';
import { ReactComponent as AboutIllustration } from './aboutme1.svg'; // Import your SVG file

const AboutMe = () => {
  return (
    <section id="about-me" className="lg:hidden">
      {/* Display only in mobile screens (hidden in larger screens) */}
      <div className="bg-gray-900 text-white p-8 mx-auto lg:mx-0 lg:ml-auto lg:max-w-4xl">
        <div className="max-w-4xl flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6 about-me-hover">About Me</h2>
            <p className="text-lg mb-4">
              Hi, I am J S NINAD. I am a{' '}
              <span className="text-color">Full Stack Web Developer, Passionate Programmer,</span> Hobbyist Cinematographer,
              Video Editor and a travel enthusiast. Basically everything you expect a 20 year old to talk about.
              Currently pursuing third year Computer science engineering in{' '}
              <a href="https://sahyadri.edu.in/" target="_blank" rel="noopener noreferrer" className="sahyadri-color">
                Sahyadri College of engineering and management, Mangaluru.
              </a>
            </p>
            <p className="text-lg mb-4">
              I have a passion for <span className="text-color">technology</span> and enjoy working on{' '}
              <span className="text-color">innovative projects.</span> My skills include web development, programming,
              videography, and writing. I believe in the power of creativity to solve problems and make the world a better place.
            </p>
            <p className="text-lg mb-4">
              Feel free to explore my portfolio and get in touch if you have any questions or if you'd like to collaborate on a project.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <AboutIllustration className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
