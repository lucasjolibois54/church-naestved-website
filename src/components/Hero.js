import React from 'react'
import '../styles/global.css';
import hero from '../images/hero.png';
import logo from '../images/logo.png';

function Hero() {
    return (
        <div className="px-24 w-full">
            <div className="flex h-screen">
                <div className="hidden lg:block lg:w-1/2">
                    <div className="h-full object-cover relative">
                        <img src={logo} className="absolute top-10 left-10" alt="logo" />
                        <img src={hero} className="h-full" alt="" />
                    </div>
                </div>
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h1 className="py-5 text-4xl sm:text-6xl font-black font-sans text-dark-text 2xl:text-8xl"><span className="ml-2 text-regular-green">Save</span> the lord</h1>

                        <p className="mt-2 md:text-right text-sm text-dark-text md:text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex space-x-3 justify-center md:justify-end lg:justify-end mt-6">
                            <a href="#" className="bg-dark-green px-4 py-2 md:font-semibold text-biege-text inline-flex items-center space-x-2 rounded">
                                <span>LEARN MORE ➡</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero