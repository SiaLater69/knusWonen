import React from 'react'
import Chat from '../assets/Button/ChatsCircle.svg'
import Hammer from '../assets/Button/HammerIcon.svg'
import Hand from '../assets/Button/HandDepositIcon.svg'

// buttons for hero section
const Buttons = () => {
  return (
    <div className='absolute ml-[300px] mt-[-85px] grid gap-4 grid-cols-3 h-16'>

      <button class="poppins-medium text-lg leading-[27px] text-[#39468C] bg-white p-4  inline-flex items-center w-72  rounded-xl gap-4">
        <img src={Hammer} alt="Hammer icon" class="w-8 h-8 "/>
          Reparatie melden
      </button>

      <button class="poppins-medium text-lg leading-[27px] text-[#39468C] bg-white p-4  inline-flex items-center w-72  rounded-xl gap-4">
        <img src={Hand} alt="Hand icon" class="w-8 h-8 "/>
          Huur betalen
        </button>

      <button class="poppins-medium text-lg leading-[27px] text-[#39468C] bg-white p-4  inline-flex items-center w-72  rounded-xl gap-4">
        <img src={Chat} alt="Chat icon" class="w-8 h-8 "/>
          Contact
      </button>
    </div>
  )
}

export default Buttons