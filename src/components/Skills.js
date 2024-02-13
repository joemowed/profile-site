import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaDocker, FaAws, FaLinux } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiUnity, SiMysql, SiCsharp } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: "HTML", description: "Experienced in building structured and semantic HTML documents for web pages and applications." },
  { icon: <FaCss3Alt />, name: "CSS", description: "Skilled in styling with CSS, including Flexbox, Grid, and responsive design principles." },
  { icon: <IoLogoJavascript />, name: "JavaScript", description: "Proficient in JavaScript for creating interactive web experiences and client-side logic." },
  { icon: <FaJava />, name: "Java", description: "Experienced in Java for building robust server-side applications and understanding OOP principles." },
  { icon: <FaReact />, name: "React.js", description: "Skilled in React for building dynamic and responsive single-page applications (SPAs)." },
  { icon: <FaPython />, name: "Python", description: "Proficient in Python for scripting, data analysis, and backend development." },
  { icon: <FaDocker />, name: "Docker", description: "Familiar with containerization using Docker to ensure consistency across different environments." },
  { icon: <SiMysql />, name: "MySQL", description: "Experienced in using MySQL for designing and managing relational databases." },
  { icon: <SiCsharp />, name: "C#", description: "Skilled in C# for developing Windows applications, game development with Unity, and backend services." },
  { icon: <FaAws />, name: "AWS", description: "Familiar with AWS services for hosting, storage, and cloud computing solutions." },
  { icon: <FaLinux />, name: "Unix", description: "Comfortable working with Unix/Linux operating systems for development and deployment tasks." },
  { icon: <SiUnity />, name: "Unity", description: "Experienced in game development using Unity, leveraging C# for scripting game logic and mechanics." },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkillDescription = (skillName) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="text-gray-600 body-font bg-green-100 py-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Skills</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Technologies and tools I've worked with.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full mb-10"> {/* Increased bottom margin */}
              <div 
                className="bg-gray-100 rounded flex p-4 h-full items-center cursor-pointer"
                onClick={() => toggleSkillDescription(skill.name)}
              >
                {skill.icon}
                <span className="title-font font-medium ml-3">{skill.name}</span>
              </div>
              {activeSkill === skill.name && (
                <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
