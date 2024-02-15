import React from 'react';
import wkuImage from '../assets/images/wku-image.jpg'; // Ensure this path is correct
import openBookImage from '../assets/images/open-book.jpg'; // Ensure this path is correct

const Education = () => {
  return (
    <section id="education" className="text-gray-600 body-font bg-blue-100 py-24 pt-24 mt-[-96px]">
      <div className="container mx-auto px-5 mb-24">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">Education</h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            My academic journey and coursework at Western Kentucky University.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {/* Adjust the size of the container to match the new image size */}
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
            {/* Increase the image size by 1.5 times */}
            <img className="object-cover object-center rounded-lg" src={wkuImage} alt="Western Kentucky University" style={{ height: "525px", width: 'auto' }}/>
          </div>
          {/* Ensure the text box is equally sized to the picture */}
          <div className="md:w-1/2 w-full lg:pl-10 flex flex-col items-center md:items-start" style={{ maxWidth: "1525px" }}>
            <div className="bg-white p-10 rounded-lg flex flex-col md:flex-row items-center">
              <div className="text-center md:text-left">
                <h2 className="text-xl font-medium title-font mb-4">Western Kentucky University</h2>
                <p className="leading-relaxed text-lg">Bachelor's in Computer Science</p>
                <p className="leading-relaxed text-lg">August 2021 - May 2025</p>
                <p className="leading-relaxed text-lg mt-4">Relevant Coursework:</p>
                <ul className="list-disc list-inside text-left text-lg">
                  <li>Introduction to Web Programming</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Database Management Systems 1,2</li>
                  <li>Game Programming</li>
                  <li>Computer Org and Arch</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
              <img className="ml-10 mt-4 md:mt-0 object-cover object-center rounded-lg" src={openBookImage} alt="Coursework" style={{ width: "250px", height: "auto" }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

