import React from 'react'
import image from '../assets/CTA2/image 2.png'
import Path from '../assets/CTA2/Path 2.svg'

const Cta2 = () => {
  return (
    <div className=" cta2 flex lg:mt-24 lg:w-[1512px] lg:h-[500px] md:mt-10 md:w-[800px] md:h-[820px]">
    {/* left text */}
        <div className='h-[372px]'>
            <h1 className='overlock-bold text-[32px] lg:ml-[248px] text-[#FF6B38] lg:w-[597px] lg:h-8 mb-4 md:ml-[150px] md:w-[496px]'>Schrijf je in voor onze nieuwsbrief</h1>
                <div className='poppins-regular text-base text-black lg:ml-[248px] w-[496px] leading-6 md:ml-[150px]'>
                    <p>
                        Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist.</p>
                        <br/>
                    <p>
                        Schrijf je vandaag nog in en blijf verbonden met KnusWonen!</p>
                        <button className='bg-gradient-to-r from-[#FF6B38] to-[#FFD201]  poppins-medium text-white font-bold py-2 px-6 rounded-lg mt-[30px]'>Inschrijven</button>
                </div>   
        </div>
        {/* right image */}
        <img src={Path} alt="Path" className="img1 absolute lg:w-[140.43px] lg:h-[171.3px] lg:ml-[1170px] lg:mt-[250px] md:ml-[580px] md:mt-[690px] md:w-[100px]"/>
        <img src={image} alt="image" className="img2 relative lg:h-[372px] lg:w-[498px] md:h-[372px] md:w-[498px] rounded-[12px] shadow-lg lg:ml-[-70px] lg:mt-0 md:ml-[-500px] md:mt-[50%]"/>
    </div>
  )
}

export default Cta2