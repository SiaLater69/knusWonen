import React from 'react'
import Reactangle from '../assets/Nieuws/Rectangle 6.jpg'
import Reactangle2 from '../assets/Nieuws/Rectangle 6-1.jpg'
import Reactangle3 from '../assets/Nieuws/Rectangle 6-2.jpg'
import ArrowImage from '../assets/Nieuws/Frame-2.svg'

const Nieuws = () => {
  return (
  <div className='h-[560px] w-[1512px] bg-[#9AA4D9]'>
<div className='relative left-[300px] top-[75px]'>
  <h1 className='text-[32px] overlock-bold text-[#39468C] leading-9 mb-6'>Laatste Nieuws</h1>
  <div className="flex gap-6">
    {/* card 1 */}
    <div className="w-[288px] h-[336px] bg-white rounded-[12px]">
      <img src={Reactangle} className="w-full h-[160px] rounded-t-[12px]" />
      <div className='ml-4 w-[264px] h-[99px]'>
        <p className='poppins-semibold text-[11px] leading-6 text-[#999999] mt-2.5'>5 Maart 2024 </p>
        <h1 className='overlock-bold text-[20px] leading-6 text-[#39468C] mb-2'>Telefoonstoring</h1>
        <p className='poppins-regular text-[14px] leading-[21px] text-[#39468C]'> Update: Telefoonstoring verholpen</p>
      </div>
      <span className='flex justify-end gap-x-2.5 mr-4 mt-[30px]'>
        <p className='poppins-medium text-[14px] leading-[21px] text-[#39468C]'>Lees Meer</p>
        <img src={ArrowImage} className="w-4 h-4 mt-[2px]"/>
      </span>
    </div>
    {/* card 2 */}
    <div className="w-[288px] h-[336px] bg-white rounded-[12px]">
      <img src={Reactangle2} className="w-full h-[160px] rounded-t-[12px]" />
      <div className='ml-4 w-[264px] h-[99px]'>
        <p className='poppins-semibold text-[11px] leading-6 text-[#999999] mt-2.5'>17 februari 2024 </p>
        <h1 className='overlock-bold text-[20px] leading-6 text-[#39468C] mb-2'>Energiebesparing - Wat doet KnusWonen?</h1>
        <p className='poppins-regular text-[14px] leading-[21px] text-[#39468C]'>KnusWonen werkt hard aan het energiezuiniger maken van ...</p>
      </div>
      <span className='flex justify-end gap-x-2.5 mr-4 mt-[30px]'>
        <p className='poppins-medium text-[14px] leading-[21px] text-[#39468C]'>Lees Meer</p>
        <img src={ArrowImage} className="w-4 h-4 mt-[2px]"/>
      </span>
    </div>
    {/* card 3 */}
    <div className="w-[288px] h-[336px] bg-white rounded-[12px]">
      <img src={Reactangle3} className="w-full h-[160px] rounded-t-[12px]" />
      <div className='ml-4 w-[264px] h-[99px]'>
        <p className='poppins-semibold text-[11px] leading-6 text-[#999999] mt-2.5'>30 januari 2024</p>
        <h1 className='overlock-bold text-[20px] leading-6 text-[#39468C] mb-2'>Energietoeslag: Heeft u er recht op?</h1>
        <p className='poppins-regular text-[14px] leading-[21px] text-[#39468C]'>Steeds meer mensen hebben moeite om hun energierekening te ...</p>
      </div>
      <span className='flex justify-end gap-x-2.5 mr-4 mt-[30px]'>
        <p className='poppins-medium text-[14px] leading-[21px] text-[#39468C]'>Lees Meer</p>
        <img src={ArrowImage} className="w-4 h-4 mt-[2px]"/>
      </span>
    </div>
  </div>
</div>
    <span className='flex  gap-x-2.5 mt-[120px] absolute left-2/3'>
        <p className='poppins-medium text-[14px] leading-[21px] text-[#39468C]'>Bekijk alle nieuwsberichten</p>
        <img src={ArrowImage} className="w-4 h-4 mt-[2px]"/>
      </span>
    </div>
  )
}

export default Nieuws