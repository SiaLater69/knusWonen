import React from 'react';
import CtaImage from '../assets/CTA/Untitled design.png';
import CtaPath from '../assets/CTA/Path 3.svg';


function Cta() {
  return (
    <div className=" cta lg:w-[1512px] lg:h-[500px] relative md:w-[800px] md:h-[650px] sm:w-[400px]">
      <img
        className=" blob absolute lg:w-[254px] lg:h-[274px] lg:ml-[170px] lg:mt-[-50px] md:w-[200px] md:ml-[12%] md:mt-[-28px]"
        src={CtaPath}
        alt="CtaPath"
      />
      <img
        src={CtaImage}
        alt="CtaImage"
        className="image1 relative  lg:h-[372px] lg:w-[496px] lg:ml-[248px] lg:mt-24 lg:rounded-[12px] shadow-xl md:h-[250px] md:w-[396px] md:ml-[20%] md:mt-6 md:rounded-[10px] md:shadow-md"
      />

      {/* right Text */}

      <div className=' absolute lg:left-1/2 lg:ml-[50px] lg:top-[-98px] lg:mt-24 md:ml-[18%] md:mt-[5px]'>
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