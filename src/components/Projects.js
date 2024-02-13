import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="text-gray-600 body-font bg-indigo-100 p-5">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 text-center">Projects</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-12 text-center">
        My personal projects to help develop my software development skills.
      </p>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* React Stock Market Application */}
          <div className="p-4 md:w-1/2">
            <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-medium title-font mb-2">Realtime React Stock App</h3>
              <p className="leading-relaxed text-base">
                Developed a dynamic stock market application using React and Tailwind CSS to showcase real-time financial data visualization. Integrated Financial Modeling Prep API to fetch and display real-time stock prices, historical data, and company profiles, with advanced React concepts for state management and effectual data fetching.
              </p>
              <div className="text-indigo-500 inline-flex items-center justify-center mt-4">
                Technologies: React, Tailwind CSS, Financial Modeling Prep API
              </div>
            </div>
          </div>

          {/* Lemmings Clone */}
          <div className="p-4 md:w-1/2">
            <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-medium title-font mb-2">Lemmings Clone</h3>
              <p className="leading-relaxed text-base">
                Collaborated with a team to recreate the classic game Lemmings, focusing on enhancing problem-solving and programming skills. Contributed to both game logic and user interface design using Unity and C#, implementing challenging game mechanics and level design for an engaging gameplay experience.
              </p>
              <div className="text-indigo-500 inline-flex items-center justify-center mt-4">
                Technologies: Unity, C#
              </div>
            </div>
          </div>

          {/* More projects*/}
        </div>
      </div>
    </section>
  );
};

export default Projects;
