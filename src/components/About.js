import React, { useEffect, useState } from 'react';
import johnGahaganPic from '../assets/images/johngahaganpic.png';
import John_Gahagan_Resume from '../assets/John_Gahagan_Resume.pdf'; 
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayedText}</span>;
};

const About = () => {
  return (
    <section id="about" className="text-gray-700 body-font bg-gray-100 py-24 pt-24 mt-[-96px]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="rounded-full overflow-hidden h-96 w-96 mx-auto">
            <img className="object-cover object-center h-full w-full" src={johnGahaganPic} alt="John Gahagan" />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
            <TypingText text="W.elcome, I'm John Gahagan" />
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Driven by a passion for technology and innovation, I aim to leverage my knowledge in computer science to solve real-world problems.
            With a foundation strongly built through my studies, I seek to contribute to impactful projects in the tech industry.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="https://linkedin.com/in/john-gahagan-aa99a91b7/" target="_blank" rel="noopener noreferrer" className="mr-5 text-gray-600">
              <FaLinkedin size="2em" />
            </a>
            <a href="mailto:john.gahagan3@gmail.com" className="mr-5 text-gray-600">
              <FaEnvelope size="2em" />
            </a>
            <a href="https://leetcode.com/JohnGahagan/" target="_blank" rel="noopener noreferrer" className="mr-5 text-gray-600">
              <FaCode size="2em" />
            </a>
            <a href="https://github.com/saviorfs" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <FaGithub size="2em" />
            </a>
            {/* Download Resume Button */}
            <a href={John_Gahagan_Resume} download className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
