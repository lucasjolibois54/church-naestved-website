import React from 'react'
import '../styles/global.css';
import event from '../images/event.png';

function Event() {
    return (
        <div>
            <div class="lg:py-12 lg:flex lg:justify-center">
                <div class="lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div class="lg:w-1/2">
                        <div class="h-64 bg-cover lg:rounded-lg lg:h-full">
                            <img src={event} className="h-full" alt="" />
                        </div>
                    </div>
                    <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <h2 class="text-3xl text-gray-800 font-bold">Hør mere om vores events </h2>
                        <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div class="mt-8">
                            <a href="#" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
