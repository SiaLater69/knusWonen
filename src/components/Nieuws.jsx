import React from 'react'
import Reactangle from '../assets/Nieuws/Rectangle 6.jpg'
import Reactangle2 from '../assets/Nieuws/Rectangle 6-1.jpg'
import Reactangle3 from '../assets/Nieuws/Rectangle 6-2.jpg'
import ArrowImage from '../assets/Nieuws/Frame-2.svg'

const Nieuws = () => {
  return (
  <div className='min-h-[560px] w-full lg:w-[1512px] bg-[#9AA4D9] px-4 lg:px-6 py-8 lg:py-12'>
    <div className='lg:ml-[200px]'>
      <h1 className='text-[28px] lg:text-[32px] overlock-bold text-[#39468C] leading-9 mb-6 lg:justify-start md:flex sm:flex md:justify-center sm:justify-center'>Laatste Nieuws</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* card 1 */}
        <div className="w-full lg:w-[288px] h-auto bg-white rounded-[12px]">
          <img src={Reactangle} className="w-full h-[160px] rounded-t-[12px] object-cover" alt="News 1" />
          <div className='p-4'>
            <p className='poppins-semibold text-[11px] leading-6 text-[#999999]'>5 Maart 2024 </p>
            <h2 className='overlock-bold text-[20px] leading-6 text-[#39468C] my-2'>Telefoonstoring</h2>
            <p className='poppins-regular text-[14px] leading-[21px] text-[#39468C]'> Update: Telefoonstoring verholpen</p>
          </div>
          <div className='flex justify-end gap-x-2.5 p-4 lg:mt-[42px]'>
            <p className='poppins-medium text-[14px] leading-[21px] text-[#39468C]'>Lees Meer</p>
            <img src={ArrowImage} className="w-4 h-4 mt-[2px]" alt="Arrow"/>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full lg:w-[288px] h-auto bg-white rounded-[12px]">
          <img src={Reactangle2} className="w-full h-[160px] rounded-t-[12px] object-cover" alt="News 2" />
          <div className='p-4'>
            <p className='poppins-semibold text-[11px] leading-6 text-[#999999]'>17 februari 2024 </p>
            <h2 className='overlock-bold text-[20px] leading-6 text-[#39468C] my-2'>Energiebesparing - Wat doet KnusWonen?</h2>
            <p className='poppins-regular text-[14px] leading-[21px] text-[#39468C]'>KnusWonen werkt hard aan het energiezuiniger maken van ...</p>
          </div>
          <div className='flex justify-end gap-x-2.5 p-4'>
            <p className='poppins-medium text-[14px] leading-[21px] text-[#39468C]'>Lees Meer</p>
            <img src={ArrowImage} className="w-4 h-4 mt-[2px]" alt="Arrow"/>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full lg:w-[288px] h-auto bg-white rounded-[12px]">
          <img src={Reactangle3} className="w-full h-[160px] rounded-t-[12px] object-cover" alt="News 3" />
          <div className='p-4'>
            <p className='poppins-semibold text-[11px] leading-6 text-[#999999]'>30 januari 2024</p>
            <h2 className='overlock-bold text-[20px] leading-6 text-[#39468C] my-2'>Energietoeslag: Heeft u er recht op?</h2>
            <p className='poppins-regular text-[14px] leading-[21px] text-[#39468C]'>Steeds meer mensen hebben moeite om hun energierekening te ...</p>
          </div>
          <div className='flex justify-end gap-x-2.5 p-4'>
            <p className='poppins-medium text-[14px] leading-[21px] text-[#39468C]'>Lees Meer</p>
            <img src={ArrowImage} className="w-4 h-4 mt-[2px]" alt="Arrow"/>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center lg:justify-end lg:w-[1114px] gap-x-2.5 mt-8 lg:mt-12'>
      <p className='poppins-medium text-[14px] leading-[21px] text-[#39468C]'>Bekijk alle nieuwsberichten</p>
      <img src={ArrowImage} className="w-4 h-4 mt-[2px]" alt="Arrow"/>
    </div>
  </div>
  )
}

export default Nieuws