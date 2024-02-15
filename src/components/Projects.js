import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa'; 
import stockAppImage from '../assets/images/stockappss.png';
import lemmingsImage from '../assets/images/lemmings.jpg';
import personalWebsiteImage from '../assets/images/personalwebsitess.jpg'; 
import portfolioWebsiteImage from '../assets/images/portfoliowebsitess.png'; 

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "Realtime React Stock App",
      description: "Developed a dynamic stock market application using React and Tailwind CSS to showcase real-time financial data visualization. Integrated Financial Modeling Prep API to fetch and display real-time stock prices, historical data, and company profiles, with advanced React concepts for state management and effectual data fetching.",
      technologies: "React, Tailwind CSS, Chart.js, date-fns, React Testing Library, Web Vitals",
      githubLink: "https://github.com/SaviorFs/ReactStockApp",
      imageSrc: stockAppImage,
    },
    {
      title: "Lemmings Clone",
      description: "Collaborated with a team to recreate the classic game Lemmings, focusing on enhancing problem-solving and programming skills. Contributed to both game logic and user interface design using Unity and C#, implementing challenging game mechanics and level design for an engaging gameplay experience.",
      technologies: "Unity, C#, Github, LaTeX, Agile Development, Discord",
      githubLink: "https://github.com/SaviorFs/LemmingsClone",
      imageSrc: lemmingsImage,
    },
    {
      title: "Personal Website (Retired)",
      description: `This was my first project, a personal website developed using basic HTML and CSS and hosted on GitHub Pages. I retired this version for the current one, marking the start of my development journey. [Visit the old site](https://saviorfs.github.io/PersonalSite/).`,
      technologies: "HTML, CSS, GitHub Pages",
      liveWebsite: "https://saviorfs.github.io/PersonalSite/",
      githubLink: "https://github.com/SaviorFs/PersonalSite",
      imageSrc: personalWebsiteImage,
    },
    {
      title: "Portfolio Website",
      description: "The project that replaced my original website, showcasing my development skills and projects. This is the very project I am working on right now, involving advanced web development techniques.",
      technologies: "React, Tailwind CSS, GitHub Pages",
      githubLink: "https://github.com/SaviorFs/PortfolioSite/tree/master",
      imageSrc: portfolioWebsiteImage,
    },
  ];

  const handleProjectClick = (index) => {
    if (selectedProject === index) {
      setSelectedProject(null); // Deselect if the same project is clicked again
    } else {
      setSelectedProject(index); // Select new project
    }
  };

  return (
    <section id="projects" className="text-gray-600 body-font bg-purple-100 py-24">
      <div className="container px-5 mb-10 mx-auto">
        {/* Heading and Subheading */}
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">Projects</h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            My personal projects to help develop my software development skills.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="flex flex-wrap -m-4 justify-center">
          {projects.map((project, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div onClick={() => handleProjectClick(index)} className="cursor-pointer transform transition-all duration-500">
                {selectedProject === index ? (
                  // Back of the card content
                  <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-lg text-center">
                    <img src={project.imageSrc} alt={project.title} className="h-64 w-full object-cover rounded-md" />
                  </div>
                ) : (
                  // Front of the card content
                  <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-medium title-font mb-2">{project.title}</h3>
                    <p className="leading-relaxed text-base">{project.description}</p>
                    <div className="text-indigo-500 mt-4">{project.technologies}</div>
                    {/* Adjusted margin for "This Website!" text */}
                    {project.title === "Portfolio Website" && (
                      <p className="mt-4 mb-4">This Website</p> 
                    )}
                    {/* Check for liveWebsite and render it with dark blue color */}
                    {project.liveWebsite && (
                      <div className="mt-4">
                        <a href={project.liveWebsite} target="_blank" rel="noopener noreferrer" className="inline-block mb-2" style={{ color: 'darkblue' }}>
                          Live Website
                        </a>
                      </div>
                    )}
                    <div>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-gray-600">
                        <FaGithub size="2em" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Projects;