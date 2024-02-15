import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const preventSelectionStyle = { userSelect: 'none' };

  return (
    <nav className="bg-gray-800 text-white p-5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Apply preventSelectionStyle to the portfolio title */}
        <div className="text-3xl font-bold" style={preventSelectionStyle}>John Gahagan's Portfolio</div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Apply preventSelectionStyle to the menu button */}
          <button style={preventSelectionStyle}>{isOpen ? "Close" : "Menu"}</button>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-20 opacity-100" : "top-[-490px]"}`}>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            {/* Apply preventSelectionStyle to each navbar link */}
            <a href="#about" className="hover:text-gray-300" style={preventSelectionStyle}>About</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="#education" className="hover:text-gray-300" style={preventSelectionStyle}>Education</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="#projects" className="hover:text-gray-300" style={preventSelectionStyle}>Projects</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="#skills" className="hover:text-gray-300" style={preventSelectionStyle}>Skills</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
