import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projectsData = [

  {
    id: 1,
    name: '<WEB-DIV> workshop',
    description: 'Speaker for Web-development workshop conducted for the students of Sahyadri College. Presented topics including HTML, CSS, and JavaScript.',
    imageUrl: 'webdiv1.png',
  },
  {
    id: 2,
    name: 'Patent for COFFEE PICKER',
    description: 'Developed a patent for a coffee picker machine. Worked in a team of engineers to design and build the prototype and applied for Patent',
    imageUrl: 'patent1.png',
  },
  {
    id: 3,
    name: 'Recruitment Head',
    description: 'Currently HR and Core team member at TEAM CHALLENGERS. Got the opportunity to become a core member of a student launchpad in Sahyadri.',
    imageUrl: 'challhr.png',
  },
  {
    id: 4,
    name: 'Technical Lead-Synergia',
    description: 'Worked as a technical lead for a national level technical event called Synergia\'24 -3 day National Level Techincal Event conducted by Team Challengers',
    imageUrl: 'certificate.png',
  },
  {
    id: 5,
    name: 'Intern At VOLTIX solution',
    description: 'Worked as a full stack developer intern in Voltix solution form 9-oct-2023 to 4-nov-2023 and worked on content managment web-app ',
    imageUrl: 'intern.png',
  },
  // Add more projects as needed
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
      <style>{`
        .card {
          height: 20rem; /* Set a fixed height for the card */
          transition: transform 0.3s ease; /* Add transition effect */
        }

        .card:hover {
          transform: translateY(-5px); /* Move card up slightly on hover */
        }

        .description-container {
          max-height: 5rem; /* Set max height for description */
          overflow-y: auto; /* Enable vertical scrolling */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
          -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
          padding-bottom: 1rem; /* Decrease padding at the bottom */
        }

        .description-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }

        .text-bg {
          background-color: rgba(256, 256, 256, 0.1); /* Light background color */
          padding: 1rem; /* Add padding */
          border-radius: 0 0 0.5rem 0.5rem; /* Rounded bottom corners */
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Experience and Achievements</h2>

        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {projectsData.map((project) => (
              <div key={project.id} className="p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ring-2 ring-blue-500 ring-opacity-50">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="mb-4 rounded-md w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm mb-4">{project.description}</p>
              </div>
            ))}
          </Slider>
        </div>

        <div className="hidden lg:flex flex-wrap justify-center">
          {projectsData.map((project) => (
            <div key={project.id} className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="card rounded-md overflow-hidden shadow-md hover:shadow-lg border border-gray-200 relative">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <div className="description-container">
                    <div className="text-bg"> {/* Added text-bg class */}
                      <p className="text-sm mb-4">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
