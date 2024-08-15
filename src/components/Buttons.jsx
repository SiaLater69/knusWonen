import React from 'react';
import Chat from '../assets/Button/ChatsCircle.svg';
import Hammer from '../assets/Button/HammerIcon.svg';
import Hand from '../assets/Button/HandDepositIcon.svg';

// buttons for hero section
const Buttons = () => {
  return (
    <div className="absolute ml-[300px] mt-[-85px] flex justify-between gap-x-3">
      {buttonsData.map((button, index) => (
        <button
          key={index}
          className="poppins-medium text-lg leading-[27px] text-[#39468C] bg-white p-4 inline-flex items-center w-72 rounded-xl gap-4"
        >
          <img src={button.icon} alt={button.alt} className="w-8 h-8" />
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