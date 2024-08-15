import React from 'react';
import Chat from '../assets/Button/ChatsCircle.svg';
import Hammer from '../assets/Button/HammerIcon.svg';
import Hand from '../assets/Button/HandDepositIcon.svg';

// buttons for hero section
const Buttons = () => {
  return (
    <div className="absolute lg:ml-[300px] lg:mt-[-120px]  grid gap-4 grid-cols-3 h-16 md:mt-[-120px]">
      {buttonsData.map((button, index) => (
        <button
          key={index}
          className="poppins-medium lg:text-lg leading-[27px] text-[#39468C] bg-white lg:p-4 md:p-4 flex items-center lg:w-72 rounded-xl lg:gap-4 md:w-[200px] lg:ml-0 md:ml-8 md:text-base md:leading-[20px] sm:text-sm"
        >
          <img src={button.icon} alt={button.alt} className="lg:w-8 lg:h-8 w-6 h-6" />
          {button.label}
        </button>
      ))}
    </div>
  );
};
// button data
const buttonsData = [
  {
    icon: Hammer,
    alt: "Hammer icon",
    label: "Reparatie melden",
  },
  {
    icon: Hand,
    alt: "Hand icon",
    label: "Huur betalen",
  },
  {
    icon: Chat,
    alt: "Chat icon",
    label: "Contact",
  },
];

export default Buttons;