import React from 'react'
import '../styles/global.css';
import hero from '../images/hero.png';

function Hero() {
    return (
        <div className="w-full p-20">
            <div className="flex h-screen">
                <div className="hidden lg:block lg:w-1/2" >
                    <div className="h-full object-cover">
                        <img src={hero} className="h-full" alt="A dog smiling in a party hat" />
                    </div>
                </div>
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h1 className="py-5 text-9xl font-semibold text-dark-text md:text-8xl"><span className="ml-2 text-regular-green">Save</span> the lord</h1>

                        <p className="mt-2 text-sm text-dark-text md:text-lg text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex space-x-3 justify-end lg:justify-end mt-6">
                            <a href="https://www.facebook.com/FontGen/" className="bg-dark-green px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
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