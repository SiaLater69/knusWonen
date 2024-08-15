import React from 'react'
import Frame1 from '../assets/Footer/Frame-1.svg'
import Frame2 from '../assets/Footer/Frame.svg'

const Footer = () => {
  return (
    <div className='w-[1512px] h-[230px] bg-[#E5E5E5] flex gap-x-16 pt-16'>
        <div className='ml-[144px]  w-72 h-[84px]'>
        <p className='overlock-bold text-xl leading-6 text-black'>Bel of mail ons</p>
        <p className='poppins-regular text-base leading-6 text-black'>012 - 345 67 89</p>
        <p className='poppins-regular text-base leading-6 text-black'>klantenservice@knuswonen.nu</p>
        </div>
        <div className=' w-72 h-[108px]'>
        <p className='overlock-bold text-xl leading-6 text-black'>Openingstijden</p>
        <p className='poppins-regular text-base leading-6 text-black'>Maandag t/m donderdag van 8:30 tot 16:30 uur.</p>
        <p className='poppins-regular text-base leading-6 text-black'>Vrijdag van 8:30 tot 12:00 uur</p>
        </div>
        <div className=' w-72 h-[84px]'>
        <p className='overlock-bold text-xl leading-6 text-black'>Kom langs op afspraak</p>
        <p className='poppins-regular text-base leading-6 text-black'>Straatweglaan 123</p>
        <p className='poppins-regular text-base leading-6 text-black'>1234 AB Dorpstad</p>
        </div>
        <div className=' w-[275px]'>
        <p className='overlock-bold text-xl leading-6 text-black'>Volg ons op onze sociale kanalen</p>

        <div className='flex gap-x-1 w-[32px] h-[32px]'>
        <img src={Frame1} alt="Frame1"/>
        <img src={Frame2} alt="Frame2"/>
        </div>
        </div>
    </div>
  )
}

export default Footer