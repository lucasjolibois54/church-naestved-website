import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Kirke from "../images/bygningKirke.png";
import fb from '../images/ikonTilFb.png';
import ig from '../images/instagramIkonet.png';
import tw from '../images/twitterIkonet.png';
import yt from '../images/YoutubeMedie.png'; 

function AboutHome() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
    return (
        <div className=" p-0 flex flex-col w-full xl:flex-row md:p-16 mb-4">
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
          <h3 data-aos="fade-right" className="text-2xl pt-10 font-semibold text-regular-green">
          Mere om os
          </h3>
          <h2  data-aos="fade-right" className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
            Lær mere at <br />
            <span className="text-regular-green"> kende om os</span>
          </h2>
          <p data-aos="fade-right" className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-48">
          I Næstved provsti har vi fokus på det, der er fælles. Her hjælper og inspirerer alle sogne og kirker hinanden, så mennesker, uanset hvor de bor, kan blive mødt af ordet om Gud. Her er man altid velkommen til at deltage i en gudstjeneste, studiekreds, babysalmesang eller koncert, til at besøge en kirke som turist eller arkitektur interesseret, til at blive undervist, få en samtale med en præst eller markere en vigtig livssituation med et kirkeligt ritual.



          </p>
          <h3 data-aos="fade-right" className="text-xl font-semibold text-dark-text pb-5 pt-2 flex flex-col items-center xl:flex-row xl:text-2xl"><span className="mr-3 mb-4 xl:mb-0">
          Find os på sociale medier:{" "}</span>
            <span className="text-regular-green font-bold flex"><img src={fb} className=" h-auto w-7 mr-3" alt="SoMe"/><img src={ig} className=" h-auto w-7  mr-3" alt="SoMe"/><img src={tw} className=" h-auto w-7  mr-3" alt="SoMe"/><img src={yt} className=" h-auto w-7" alt="SoMe"/></span>
          </h3>
          <div className="flex justify-center text-center items-center py-0 xl:justify-start">
            <a data-aos="fade-right"
              href="https://tailwindcss.com/docs/responsive-design"
              className="font-semibold bg-dark-green hover:bg-light-green px-4 py-2 text-biege-text rounded"
            >
              Lær mere om os &rarr;
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="w-full xl:w-5/10">
          <img src={Kirke} className="p-16" alt="church"/>
        </div>
      </div>
    )
}

export default AboutHome
