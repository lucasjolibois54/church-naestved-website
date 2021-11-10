import React from 'react'
import '../styles/global.css';
import '../styles/bg.css'
import hero from '../images/hero.png';
import logo from '../images/logo.png';
import fb from '../images/fb_ikon.png';
import ig from '../images/ig_ikon.png';
import tw from '../images/tw_ikon.png';
import yt from '../images/yt_ikon.png'; 

function Hero() {
    return (
        <div className="px-24 w-full" id="hero" >
            <div className="flex h-screen">
                <div className="hidden lg:block lg:w-1/2">
                    <div className="h-full object-cover relative">
                        <img src={logo} className="absolute top-10 left-10" alt="logo" />
                        <img src={hero} className="h-full" alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-right justify-between text-center lg:text-right md:px-12 lg:w-1/2">
                    <div className="flex items-right flex-col mt-48 md:mt-64 lg:mt-80">
                        <h1 className="py-5 text-4xl sm:text-6xl font-black font-sans text-dark-text 2xl:text-8xl"><span className="text-regular-green">Næstved</span> Provsti</h1>
                        <p className="mt-2 lg:pl-40 lg:text-right text-sm text-dark-text md:text-lg text-center">Det hellige Evangelium er hverdag hos os. Vi befinder os både som din fysiske og digitale kirke med alt fra events med koncerter, arrangementer til gudstjenester og meget mere. </p>
                        <div className="flex space-x-3 justify-center lg:justify-end lg:justify-end mt-6">
                            <a href="https://www.facebook.com/FontGen/" className="bg-dark-green px-2 py-1 md:px-6 md:py-4 font-semibold text-biege-text inline-flex items-center space-x-2 rounded">
                                <span className="text-lg">Få mere at vide &rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end md:justify-center lg:justify-end items-center mb-14 md:mb-10 lg:mb-20">
                        <a className="m-2 md:m-5" href="https://www.facebook.com/naestvedprovsti">
                            <img src={fb}></img>
                        </a>
                        <a className="m-2 md:m-5" href="https://www.instagram.com/naestvedprovsti/">
                            <img src={ig}></img>
                        </a>
                        <a className="m-2 md:m-5" href="#">
                            <img src={tw}></img>
                        </a>
                        <a className="m-2 md:m-5" href="https://www.youtube.com/channel/UC2UpL7ASRJE5nuWLiuGfAoA">
                            <img src={yt}></img>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero