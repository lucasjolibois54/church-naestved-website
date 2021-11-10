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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2275.602893083584!2d11.786574!3d55.22518900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46529769d9971641%3A0xf02bfa1717118a36!2sN%C3%A6stved%20Provsti!5e0!3m2!1sen!2sdk!4v1636562656241!5m2!1sen!2sdk" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Findos
