import React from 'react';
import CtaImage from '../assets/CTA/Untitled design.png';
import CtaPath from '../assets/CTA/Path 3.svg';


function Cta() {
  return (
    <div className="w-[1512px] h-[500px] relative">
      <img
        className="absolute w-[254px] h-[274px] ml-[170px] mt-[-50px]"
        src={CtaPath}
        alt="CtaPath"
      />
      <img
        src={CtaImage}
        alt="CtaImage"
        className="relative h-[372px] w-[496px] ml-[248px] mt-24 rounded-[12px] shadow-xl"
      />

      {/* right Text */}

      <div className=' absolute left-1/2 ml-[50px] top-[-98px] mt-24'>
        <h1 className='text-[32px] overlock-bold text-[#35BCE7] mb-4 w-[597px]'>We verbeteren onze woningen</h1>
        <div className='poppins-regular text-base text-black w-[496px]'>
        <p>Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.</p>
        <br/>
        <p>
          Wilt u meer weten over onze energiebesparende maatregelen?
        </p>
        </div>
       <button className='bg-gradient-to-r from-[#BFE27D] to-[#35BCE7]  poppins-medium text-white font-bold py-2 px-6 rounded-lg mt-[30px]'>Lees Meer</button>
      </div>
    </div>
  );
}

export default Cta;