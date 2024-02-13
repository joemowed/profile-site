import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">John Gahagan's Portfolio</div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button>{isOpen ? "Close" : "Menu"}</button>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-20 opacity-100" : "top-[-490px]"}`}>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="#about" className="hover:text-gray-300">About</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="#education" className="hover:text-gray-300">Education</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="#projects" className="hover:text-gray-300">Projects</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="#skills" className="hover:text-gray-300">Skills</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
