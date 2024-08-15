import React from 'react';
import logo from '../assets/logo.svg';
import Frame3 from '../assets/Frame-3.svg';
import Frame4 from '../assets/Frame-4.svg';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-white h-20 w-[1512px]">
      {/* Logo */}
      <div className="ml-[143px] mt-5">
        <img src={logo} alt="Logo" className="h-10 w-52" />
      </div>

      {/* Middle links */}
      <div className="poppins-semibold text-base leading-6 text-[#39468C] flex mt-6 gap-x-3">
        <a href="#">Ik huur</a>
        <a href="#">Ik zoek</a>
        <a href="#">Over ons</a>
        <a href="#">Projecten</a>
      </div>

      {/* Right icons */}
      <div className="flex mr-[220px] gap-x-2.5 m-2.5 mt-6">
        <a href="#">
          <img src={Frame3} alt="Logo" className="h-7 w-7" />
        </a>
        <a href="#">
          <img src={Frame4} alt="Logo" className="h-7 w-7" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;