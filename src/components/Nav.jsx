import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import Frame3 from '../assets/Frame-3.svg';
import Frame4 from '../assets/Frame-4.svg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center bg-white p-4 w-full">
      {/* Logo */}
      <div className="flex items-center lg:ml-[197px]">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Hamburger menu for mobile */}
      <button
  aria-label="Toggle navigation menu"
  aria-expanded={isMenuOpen}
  aria-controls="nav-menu"
  className="lg:hidden"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

      {/* Navigation links and icons */}
      <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
  <div className="text-sm lg:flex-grow lg:justify-center lg:ml-[-870px]">
    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#39468C] hover:text-blue-700 mr-4 poppins-semibold">
      Ik huur
    </a>
    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#39468C] hover:text-blue-700 mr-4 poppins-semibold">
      Ik zoek
    </a>
    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#39468C] hover:text-blue-700 mr-4 poppins-semibold">
      Over ons
    </a>
    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#39468C] hover:text-blue-700 poppins-semibold">
      Projecten
    </a>
  </div>
  <div className="flex items-center mt-4 lg:mr-36">
    <a href="#" className="mr-2">
      <img src={Frame3} alt="Icon 1" className="h-6 w-6" />
    </a>
    <a href="#">
      <img src={Frame4} alt="Icon 2" className="h-6 w-6" />
    </a>
  </div>
</div>
    </nav>
  );
};

export default Nav;