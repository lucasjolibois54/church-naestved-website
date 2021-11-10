import React from 'react'
import '../styles/global.css';


function Kontakt() {
    return (

        <div
        className="
        font-sans
          mb-0
          mt-20
          flex flex-col
          content-center
          text-off-white text-3xl
          lg:flex-row
        "
      >
        <div className="w-full bg-light-green pt-10 pb-20 pr-10 text-right w-100% lg:w-1/2">
          <h2 className="pl-8 text-4xl font-black pb-10 pr-10  text-biege-text md:text-5xl">Billede af kirke skal ind her</h2>
        </div>
        <div className="w-full bg-biege-text pt-10 pb-20 text-left pl-10 w-100% lg:w-1/2">
          <h2 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
                    Kontakt os 
                    <br />
                    <span className="text-regular-green">på mail</span>
                </h2>
                <p className="text-lg  text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-48">
                Send os en e-mail os få svar på samme dag!
                        </p>




        <div >
          <div >

          </div>
          <div className="lg:w-1/2 md:w-2/3 ">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-light-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-light-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-light-green h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-regular-green border-0 py-2 px-8 focus:outline-none hover:bg-light-green rounded text-lg">
                  Send
                </button>
              </div>

            </div>
          </div>
        </div>


        </div>
        </div>
    )
}

export default Kontakt

//style="background-image: url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png);