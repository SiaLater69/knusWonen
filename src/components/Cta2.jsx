import React from 'react'
import image from '../assets/CTA2/image 2.png'
import Path from '../assets/CTA2/Path 2.svg'

const Cta2 = () => {
  return (
    <div className="flex mt-24 w-[1512px] h-[500px]">
    {/* left text */}
        <div className='h-[372px]'>
            <h1 className='overlock-bold text-[32px] ml-[248px] text-[#FF6B38] w-[597px] h-8 mb-4'>Schrijf je in voor onze nieuwsbrief</h1>
                <div className='poppins-regular text-base text-black ml-[248px] w-[496px] leading-6'>
                    <p>
                        Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist.</p>
                        <br/>
                    <p>
                        Schrijf je vandaag nog in en blijf verbonden met KnusWonen!</p>
                        <button className='bg-gradient-to-r from-[#FF6B38] to-[#FFD201]  poppins-medium text-white font-bold py-2 px-6 rounded-lg mt-[30px]'>Inschrijven</button>
                </div>   
        </div>
        {/* right image */}
        <img src={Path} alt="Path" className="absolute w-[140.43px] h-[171.3px] ml-[1260px] mt-[250px]"/>
        <img src={image} alt="image" className="relative h-[372px] w-[498px] rounded-[12px] shadow-lg"/>
    </div>
  )
}

export default Cta2