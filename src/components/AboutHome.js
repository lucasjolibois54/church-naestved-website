import React from 'react'
import Kirke from "../images/Krike.png";

function AboutHome() {

    return (
        <div className=" p-28 flex flex-col w-full xl:flex-row">
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
          <h3 className="text-2xl pt-10 font-semibold text-regular-green">
          Mere om os
          </h3>
          <h2 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-5">
            Lær mere at <br />
            <span className="text-regular-green"> kende om os</span>
          </h2>
          <p className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <h3 className="text-2xl font-semibold text-dark-text pb-5 pt-2">
          Find us on social media:{" "}
            <span className="text-regular-green font-bold">Find us on social media: </span>.
          </h3>
          <div className="flex justify-center text-center items-center py-8 xl:justify-start">
            <a
              href="https://tailwindcss.com/docs/responsive-design"
              className="font-semibold bg-dark-green px-4 py-2 text-biege-text rounded"
            >
              Lær mere om os &rarr;
            </a>
          </div>
        </div>
        <div className="w-full xl:w-5/10">
          <img src={Kirke} className="zoom h-full p-16" />
        </div>
      </div>
    )
}

export default AboutHome
