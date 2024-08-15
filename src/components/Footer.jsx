import React from 'react'
import Frame1 from '../assets/Footer/Frame-1.svg'
import Frame2 from '../assets/Footer/Frame.svg'

const Footer = () => {
  return (
    <div className='w-full max-w-[1512px] lg:h-[240px] h-auto bg-[#E5E5E5] flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-y-0 lg:gap-x-16 md:pt-8 lg:pt-16 pt-2 px-8 mx-auto'>
      <div className='lg:ml-[144px] w-full md:w-1/2 lg:w-72 h-auto text-center md:text-left'>
        <p className='overlock-bold text-xl leading-6 text-black'>Bel of mail ons</p>
        <p className='poppins-regular text-base leading-6 text-black'>012 - 345 67 89</p>
        <p className='poppins-regular text-base leading-6 text-black'>klantenservice@
        knuswonen.nu</p>
      </div>
      <div className='w-full md:w-1/2 lg:w-72 h-auto text-center md:text-left'>
        <p className='overlock-bold text-xl leading-6 text-black'>Openingstijden</p>
        <p className='poppins-regular text-base leading-6 text-black'>Maandag t/m donderdag van 8:30 tot 16:30 uur.</p>
        <p className='poppins-regular text-base leading-6 text-black'>Vrijdag van 8:30 tot 12:00 uur</p>
      </div>
      <div className='w-full md:w-1/2 lg:w-72 h-auto text-center md:text-left'>
        <p className='overlock-bold text-xl leading-6 text-black'>Kom langs op afspraak</p>
        <p className='poppins-regular text-base leading-6 text-black'>Straatweglaan 123</p>
        <p className='poppins-regular text-base leading-6 text-black'>1234 AB Dorpstad</p>
      </div>
      <div className='w-full md:w-1/2 lg:w-[275px] h-auto text-center md:text-left'>
        <p className='overlock-bold text-xl leading-6 text-black'>Volg ons op onze sociale kanalen</p>
        <div className='flex justify-center md:justify-start gap-x-1'>
          <img src={Frame1} alt="Social Media Icon 1" className='w-[32px] h-[32px]' />
          <img src={Frame2} alt="Social Media Icon 2" className='w-[32px] h-[32px]' />
        </div>
      </div>
    </div>
  )
}

export default Footer
