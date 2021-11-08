import React from 'react'
import '../styles/global.css';
import hero from '../images/hero.png';

function Hero() {
    return (
        <div className="w-full">
            <div className="flex h-screen">
                <div className="hidden lg:block lg:w-1/2" >
                    <div className="h-full object-cover">
                        <img src={hero} className="h-full" alt="A dog smiling in a party hat" />
                    </div>
                </div>
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h1 className="py-5 text-9xl font-semibold text-gray-800 md:text-8xl"><span className="ml-2 text-blue-600">Save</span> the lord</h1>

                        <p className="mt-2 text-sm text-gray-500 md:text-lg text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex space-x-3 justify-end lg:justify-end mt-6">
                            <a href="https://www.facebook.com/FontGen/" className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero