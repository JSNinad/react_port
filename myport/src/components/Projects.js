// Projects.js
import React from 'react';
import Slider from 'react-slick';
import { FaGithub, FaServer } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projectsData = [
 
  {
    id: 1,
    name: ' Coming soon website',
    description: 'Aerophilia, national Level technical event, Built a coming soon website using HTML BOOTSTRAP CSS JS ',
    imageUrl: 'Aerophiliacs.png',
    githubLink: 'https://github.com/JSNinad/home_aero',
    demoLink: 'https://aerophilia23cs.netlify.app/',
  },
  {
    id: 2,
    name: 'AttendEaze',
    description: 'Automated attendance tracking portal using Image processing and Machine learning .',
    imageUrl: 'attendease.jpg',
    githubLink: 'https://github.com/AnudeepKK/Attendance_backend',
    demoLink: 'https://attendencetracker-ca4cd.web.app/',
  },
  {
    id: 3,
    name: 'Aerophilia Website',
    description: 'Website for registration and maintaining data for a national-level technical event.',
    imageUrl: 'aeromain.png',
    githubLink: 'https://github.com/Aerophilia/Aerophilia2023',
    demoLink: 'https://aerophilia.in/',
  },

  
  {
    id: 4,
    name: 'Eazy Registration',
    description: 'Extra-curricular Registration Management Portal for easy maintenance and flow of students.' ,
    imageUrl: 'dbms.png',
    githubLink: 'https://github.com/JSNinad/dbpro',
    demoLink: 'https://drive.google.com/file/d/12osKrGj7guXcXL37nEaltVzU4AGs0j3N/view?usp=drivesdk',
  },

  
  // {
  //   id: 5,
  //   name: 'Project 3: Another Project',
  //   description: 'Description of Project 3. Similar to Project 1, provide detailed information about the project.',
  //   imageUrl: 'project3.jpg',
  //   githubLink: 'https://github.com/your-username/project3',
  //   demoLink: 'https://example.com/project3-demo',
  // },
    
  // {
  //   id: 6,
  //   name: 'Project 3: Another Project',
  //   description: 'Description of Project 3. Similar to Project 1, provide detailed information about the project.',
  //   imageUrl: 'project3.jpg',
  //   githubLink: 'https://github.com/your-username/project3',
  //   demoLink: 'https://example.com/project3-demo',
  // },
  
  

];


const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <section id="projects" className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 about-me-hover">My Projects</h2>

        {/* For screens smaller than lg (mobile) */}
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {projectsData.map((project) => (
              <div key={project.id} className="p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ring-2 ring-blue-500 ring-opacity-50">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="mb-4 rounded-md w-full h-40 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <FaServer />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        
 

        {/* For screens larger than lg (laptop and above) */}
        <div className="hidden lg:flex space-x-8">
    
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ring-2 ring-blue-500 ring-opacity-50"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="mb-4 rounded-md w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex items-center space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <FaServer />
                </a>
              </div>
            </div>
          ))}
  
        </div>
        
      </div>
      
    </section>
  );
};

export default Projects;

