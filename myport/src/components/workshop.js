// Projects.js
import React from 'react';
import Slider from 'react-slick';
import { FaGithub, FaServer } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projectsData = [
 
  {
    id: 1,
    name: 'Recruitment Lead',
    description: 'Currently HR and Core team member at TEAM CHALLENGERS ',
    imageUrl: 'logo.png',
    githubLink: 'https://github.com/JSNinad/home_aero',
    demoLink: 'https://aerophilia23cs.netlify.app/',
  },
  {
    id: 2,
    name: '<WEB-DIV>',
    description: 'Speaker for Web-development workshop conducted for the students of sahyadri College .',
    imageUrl: 'webdiv1.png',
    githubLink: 'https://github.com/your-username/project2',
    demoLink: 'https://aerophilia.in',
  },
  {
    id: 3,
    name: 'Patent for COFFEE PICKER',
    description: 'Description of Project 3. Similar to Project 1, provide detailed information about the project.',
    imageUrl: 'patent1.png',
    githubLink: 'https://github.com/your-username/project3',
    demoLink: 'https://example.com/project3-demo',
  },

  // {
  //   id: 4,
  //   name: 'Project 3: Another Project',
  //   description: 'Description of Project 3. Similar to Project 1, provide detailed information about the project.',
  //   imageUrl: 'project3.jpg',
  //   githubLink: 'https://github.com/your-username/project3',
  //   demoLink: 'https://example.com/project3-demo',
  // },
  
  
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
  
  // {
  //   id: 4,
  //   name: 'Project 3: Another Project',
  //   description: 'Description of Project 3. Similar to Project 1, provide detailed information about the project.',
  //   imageUrl: 'project3.jpg',
  //   githubLink: 'https://github.com/your-username/project3',
  //   demoLink: 'https://example.com/project3-demo',
  // },
  
  // {
  //   id: 4,
  //   name: 'Project 3: Another Project',
  //   description: 'Description of Project 3. Similar to Project 1, provide detailed information about the project.',
  //   imageUrl: 'project3.jpg',
  //   githubLink: 'https://github.com/your-username/project3',
  //   demoLink: 'https://example.com/project3-demo',
  // },
  // Add more projects as needed
];
// ... (import statements remain unchanged)
// ... (import statements remain unchanged)

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
        <h2 className="text-4xl font-bold mb-6 about-me-hover">Experience and achievements</h2>

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

