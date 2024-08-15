import React from 'react'
import Main from '../assets/hero/HeroBackground.png'
import Buttons from './Buttons'


const Hero = () => {
  return (
    <div>
    {/* Backround IMG */}
    <img src={Main} alt="Main" class="h-[560px] w-[1512px]"/>
    <p class="poppins-medium text-[24px] absolute top-[500px] left-[300px] text-white font-bold">Waarmee kunnen we je helpen?</p>
    <Buttons/>
    </div>
  )
}

export default Hero