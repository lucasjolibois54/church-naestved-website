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
        font-sans
          mb-0
          mt-20
          flex flex-col
          content-center
          text-off-white text-3xl
          lg:flex-row
        "
      >
        <div className="w-full bg-light-green pt-10 pb-20 pr-10 text-right w-100% lg:w-2/6">
          <h2 className="pl-8 text-4xl font-black pb-10 pr-10  text-biege-text md:text-5xl">Barmhjertighed</h2>
          <h2 className="pl-10 text-xl text-biege-text">Barmhjertighed betyder meget for os i det
at tage sig af hinanden og vise omsorg
er en vigtig del af det vi står for.</h2>
        </div>
        <div className="w-full bg-medium-green pt-10 pb-20 text-right pr-10 w-100% lg:w-2/6">
          <h2 className="pl-8 text-4xl pb-10 font-black text-biege-text  md:text-5xl">Kærlighed</h2>
          <h2 className="pl-10  text-xl text-biege-text">
          Kærlighed for os er som en varm inderlig følelse af hengivenhed og respekt 
vi viser til andre
          </h2>
        </div>
        <div className="w-full bg-dark-green pt-10 pb-20 pr-10 w-100% lg:w-2/6 text-right">
          <h2 className="pl-8 text-4xl pb-10 font-black text-biege-text  md:text-5xl">Velgørenhed</h2>
          <h2 className="pl-10 text-xl text-biege-text">Udøvelse af velgørenhed er for os en frivillig ydelse af hjælp til nødlidende, som en humanitær handling.</h2>
        </div>
      </div>
    )
}

export default ValueSec
