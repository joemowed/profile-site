import React from 'react';
import wkuImage from '../assets/images/wku-image.jpg'; // Ensure this path is correct
import openBookImage from '../assets/images/open-book.jpg'; // Ensure this path is correct

const Education = () => {
  return (
    <section id="education" className="text-gray-600 body-font bg-blue-100 py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Education</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            My academic journey and coursework at Western Kentucky University.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" src={wkuImage} alt="Western Kentucky University"/>
          </div>
          <div className="md:w-1/2 w-full lg:pl-10 flex flex-col items-center md:items-start">
            <div className="bg-white p-8 rounded flex flex-col md:flex-row items-center">
              <div className="text-center md:text-left">
                <h2 className="text-lg font-medium title-font mb-2">Western Kentucky University</h2>
                <p className="leading-relaxed text-base">Bachelor's in Computer Science, August 2021 - May 2025</p>
                <p className="leading-relaxed text-base mt-4">Relevant Coursework:</p>
                <ul className="list-disc list-inside text-left">
                  <li>Introduction to Web Programming</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Database Management Systems 1 and 2</li>
                  <li>Game Programming</li>
                  <li>Computer Organization and Architecture</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
              <img className="ml-10 mt-4 md:mt-0 object-cover object-center rounded" src={openBookImage} alt="Coursework" style={{ width: "200px", height: "auto" }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
