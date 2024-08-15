import React from 'react'
import Main from '../assets/hero/HeroBackground.png'
import Buttons from './Buttons'


const Hero = () => {
  return (
    <div>
    {/* Backround IMG */}
    <img src={Main} alt="Main" class="h-[560px] lg:w-[1512px] md:object-cover md:w-[820px] sm:w-[450px] object-cover"/>
    <p className="poppins-medium text lg:text-2xl relative lg:top-[-150px] lg:left-[300px] md:text-2xl md:top-[-140px] md:left-1/4 text-white">Waarmee kunnen we je helpen?</p>
    <Buttons/>
    </div>
  )
}

export default Hero