import React from 'react'
import '../styles/global.css';
import Kirke from "../images/Krike.png";

function Findos() {
    return (
        <div className=" p-0 flex flex-col w-full xl:flex-row md:p-16 mb-4">
            <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
                <h3 className="text-2xl pt-10 font-semibold text-regular-green">
                    Informationer
                </h3>
                <h2 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
                    Kom og find 
                    <br />
                    <span className="text-regular-green">os i Næstved</span>
                </h2>
                <p className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-48">
                    I Næstved provsti har vi fokus på det, der er fælles. Her hjælper og inspirerer 



                </p>

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

export default Findos
