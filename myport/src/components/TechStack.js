// TechStack.js
import React from 'react';
import Typed from 'react-typed';

const TechStack = () => {
  return (

    

    <div id ="Tech"  className="bg-gray-900 text-white p-8">
      

      <div className="max-w-4xl mx-auto">
      <div >
      <h2 className="text-4xl font-bold mb-6 about-me-hover">Tech Stack</h2>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <TechItem name="HTML5" />
          <TechItem name="CSS3" />
          <TechItem name="JavaScript" />
          <TechItem name="React" />
          <TechItem name="MongoDB" />
          <TechItem name="Tailwind" />
          <TechItem name="Boostrap" />
          <TechItem name="Firebase" />
          <TechItem name="AWS" />
          <TechItem name="Azure" />
          <TechItem name="Docker" />
          <TechItem name="Kubernetes" />
          <TechItem name="Linux" />
          <TypedTechItem name="" />
          {/* Add more technologies as needed */}
        </div>
      </div>
    </div>
    
  );
};

const TechItem = ({ name }) => (
  <div className="bg-gray-800 p-4 rounded-md shadow-md transform hover:scale-105 transition-transform">
    <p className="text-lg font-semibold">{name}</p>
  </div>
);

const TypedTechItem = ({ name }) => (
    <div className="bg-gray-800  p-4 rounded-md shadow-md transform hover:scale-105 transition-transform">
    <Typed
      strings={[`Learning... ${name}`]}
      typeSpeed={50}
      showCursor={false}
      loop
    />
  </div>
);

export default TechStack;
