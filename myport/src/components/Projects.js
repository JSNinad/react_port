// Projects.js

import React from 'react';
import { FaGithub, FaServer } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    name: 'Aerophilia Coming soon website',
    description: 'Aerophilia , national Level technical event , Built a coming soon website using HTML BOOTSTRAP CSS JS ',
    imageUrl: 'Aerophiliacs.png', // Replace with the correct path or URL to your project image
    githubLink: 'https://github.com/JSNinad/home_aero',
    demoLink: 'https://aerophilia23cs.netlify.app/',
  },
  {
    id: 2,
    name: 'Project 2: Another Project',
    description: 'Description of Project 2. Similar to Project 1, provide detailed information about the project.',
    imageUrl: 'project2.jpg', // Replace with the correct path or URL to your project image
    githubLink: 'https://github.com/your-username/project2',
    demoLink: 'https://example.com/project2-demo',
  },
  {
    id: 2,
    name: 'Project 2: Another Project',
    description: 'Description of Project 2. Similar to Project 1, provide detailed information about the project.',
    imageUrl: 'project2.jpg', // Replace with the correct path or URL to your project image
    githubLink: 'https://github.com/your-username/project2',
    demoLink: 'https://example.com/project2-demo',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        <div className="flex space-x-8 overflow-x-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-md shadow-md"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="mb-4 rounded-md"
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
    </div>
  );
};

export default Projects;
