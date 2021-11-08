import React from 'react'
import '../styles/global.css';
import event from '../images/event.png';

function Event() {
    return (
        <div>
            <div class="mt-10 lg:py-12 lg:flex lg:justify-center">
                <div class="lg:mx-8 lg:flex lg:max-w-8xl lg:rounded-lg">
                    <div class="lg:w-9/12">
                        <div class="h-64 bg-cover lg:rounded-lg lg:h-96">
                            <img src={event} className="h-full" alt="" />
                        </div>
                    </div>
                    <div class="py-12 px-6 max-w-xl lg:max-w-8xl lg:w-11/12">
                        <h2 class="text-3xl font-bold">Hør mere om vores events </h2>
                        <p class="mt-4 ml-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div class="mt-8 ml-6">
                            <a href="https://www.facebook.com/FontGen/" className="bg-dark-green px-4 py-2 md:font-semibold text-biege-text inline-flex items-center space-x-2 rounded">
                                <span>LEARN MORE ➡</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
