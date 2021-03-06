import React from 'react'
import '../styles/global.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Findos() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className=" p-0 mt-24 mb-32 flex flex-col w-full xl:flex-row md:p-16 ">
            <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
                <h3 data-aos="fade-right" className="text-2xl pt-5 font-semibold text-regular-green">
                    Informationer
                </h3>
                <h2 data-aos="fade-right" className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
                    Kom og find 
                    <br />
                    <span className="text-regular-green">os i Næstved</span>
                </h2>
                <p data-aos="fade-right" className="text-lg px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-48">
                    Vores hoved kirke er localiseret i: Østre Kapelvej 10, 4700 Næstved; hvor du altid kan komme forbi hvis du har nogle spørgsmål eller ligende. Ellers er du altid velkommen til at kontakte os på mail; naestved.provsti@km.dk
                        </p>
            </div>
            <div className="w-full xl:w-5/10">
                <div className="items-center grid place-items-center">
            <iframe data-aos="fade-left" className="w-90% h-72 md:w-4/5 lg:w-full lg:h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2275.602893083584!2d11.786574!3d55.22518900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46529769d9971641%3A0xf02bfa1717118a36!2sN%C3%A6stved%20Provsti!5e0!3m2!1sen!2sdk!4v1636562656241!5m2!1sen!2sdk" allowfullscreen="" loading="lazy"></iframe>
            </div>
            </div>
        </div>
    )
}

export default Findos
