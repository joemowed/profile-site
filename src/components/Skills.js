import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaDocker, FaAws, FaLinux } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiUnity, SiMysql, SiCsharp } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: "HTML", description: "Experienced in building structured and semantic HTML documents for web pages and applications.", color: "bg-red-500" },
  { icon: <FaCss3Alt />, name: "CSS", description: "Skilled in styling with CSS, including Flexbox, Grid, and responsive design principles.", color: "bg-blue-500" },
  { icon: <IoLogoJavascript />, name: "JavaScript", description: "Proficient in JavaScript for creating interactive web experiences and client-side logic.", color: "bg-yellow-500" },
  { icon: <FaJava />, name: "Java", description: "Experienced in Java for building robust server-side applications and understanding OOP principles.", color: "bg-purple-500" },
  { icon: <FaReact />, name: "React.js", description: "Skilled in React for building dynamic and responsive single-page applications (SPAs).", color: "bg-teal-500" }, // Adjusted for better visibility
  { icon: <FaPython />, name: "Python", description: "Proficient in Python for scripting, data analysis, and backend development.", color: "bg-green-500" },
  { icon: <FaDocker />, name: "Docker", description: "Familiar with containerization using Docker to ensure consistency across different environments.", color: "bg-gray-500" },
  { icon: <SiMysql />, name: "MySQL", description: "Experienced in using MySQL for designing and managing relational databases.", color: "bg-pink-500" }, // Adjusted for consistency
  { icon: <SiCsharp />, name: "C#", description: "Skilled in C# for developing Windows applications, game development with Unity, and backend services.", color: "bg-green-700" },
  { icon: <FaAws />, name: "AWS", description: "Familiar with AWS services for hosting, storage, and cloud computing solutions.", color: "bg-orange-500" },
  { icon: <FaLinux />, name: "Unix", description: "Comfortable working with Unix/Linux operating systems for development and deployment tasks.", color: "bg-red-700" },
  { icon: <SiUnity />, name: "Unity", description: "Experienced in game development using Unity, leveraging C# for scripting game logic and mechanics.", color: "bg-purple-900" },
];

const Skills = () => {
  return (
    <section id="skills" className="text-gray-600 body-font bg-green-100 py-24 pt-24 mt-[-96px] min-h-screen">
      <div className="container px-0 mx-auto">
        <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">Skills</h1>
        <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Technologies and tools I've worked with.</p>
        </div>
        <div className="bg-green-200 rounded-lg shadow-lg p-2">
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
            {skills.map((skill) => (
              <div key={skill.name} className="p-4 sm:w-1/3 md:w-1/4 lg:w-1/5">
                <div className={`relative flex flex-col items-center justify-center h-40 rounded-lg p-4 ${skill.color} group`}>
                  {/* Icon and name with conditional opacity */}
                  <div className="flex flex-col items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                    {skill.icon}
                    <span className="title-font font-medium text-white mt-2">{skill.name}</span>
                  </div>
                  {/* Description visible only on hover */}
                  <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-3 text-center text-white text-xs">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;