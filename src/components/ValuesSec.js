import React from 'react'
import '../styles/global.css';

//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function ValueSec() {
    return (
        <div
        className="
          mb-0
          flex flex-col
          content-center
          text-off-white text-3xl
          sm:flex-row
        "
      >
        <div className="w-full bg-regular-blue pt-10 pb-20 sm:w-2/6">
          <h2 className="pl-8 text-5xl pb-10">01</h2>
          <h2 className="pl-10">You send the invoice</h2>
        </div>
        <div className="w-full bg-about-blue pt-10 pb-20 sm:w-2/6">
          <h2 className="pl-8 text-5xl pb-10">02</h2>
          <h2 className="pl-10 pr-10 text-2xl">
            It goes through a recognition system build upon blockchain, which
            compares the invoice with a digital contract you and your customer have
            already signed
          </h2>
        </div>
        <div className="w-full bg-darker-blue-one pt-10 pb-20 sm:w-2/6">
          <h2 className="pl-8 text-5xl pb-10">03</h2>
          <h2 className="pl-10">Invoice sent if verified</h2>
        </div>
      </div>
    )
}

export default ValueSec
