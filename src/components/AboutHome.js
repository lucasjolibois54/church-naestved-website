import React from 'react'
import Kirke from "../images/Krike.png";
import fb from '../images/fb_ikon.png';
import ig from '../images/ig_ikon.png';
import tw from '../images/tw_ikon.png';
import yt from '../images/yt_ikon.png'; 

function AboutHome() {

    return (
        <div className=" p-0 flex flex-col w-full xl:flex-row md:p-16 mb-4">
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
          <h3 className="text-2xl pt-10 font-semibold text-regular-green">
          Mere om os
          </h3>
          <h2 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
            Lær mere at <br />
            <span className="text-regular-green"> kende om os</span>
          </h2>
          <p className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <h3 className="text-xl font-semibold text-dark-text pb-5 pt-2 flex flex-col items-center md:flex-row md:text-2xl"><span className="mr-3 mb-4 md:mb-0">
          Find us on social media:{" "}</span>
            <span className="text-regular-green font-bold flex"><img src={fb} className=" h-auto w-7 mr-3" /><img src={ig} className=" h-auto w-7  mr-3" /><img src={tw} className=" h-auto w-7  mr-3" /><img src={yt} className=" h-auto w-7" /></span>
          </h3>
          <div className="flex justify-center text-center items-center py-0 xl:justify-start">
            <a
              href="https://tailwindcss.com/docs/responsive-design"
              className="font-semibold bg-dark-green px-4 py-2 text-biege-text rounded"
            >
              Lær mere om os &rarr;
            </a>
          </div>
        </div>
        <div className="w-full xl:w-5/10">
          <img src={Kirke} className=" h-full p-16" />
        </div>
      </div>
    )
}

export default AboutHome
