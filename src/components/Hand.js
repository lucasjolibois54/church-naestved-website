import React from "react";
import "../styles/global.css";
import barn from "../images/barn.png";

//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function Hand() {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="w-full lg:w-3/5">
        <img src={barn} className="h-full" />
      </div>
      <div className="flex flex-col w-full pl-10 pr-4 justify-center lg:w-2/5">
        <h3 className="text-2xl font-semibold text-regular-green">
          Hånden på hjertet
        </h3>
        <h1 className="text-7xl font-bold text-dark-text">
          Til dig mellem
          <span className="text-regular-green"> 10 til 20 år</span>
        </h1>
        <p className="text-xl text-dark-text">
          Går du og bekymrer dig, er ked af det og måske har brug for at snakke
          med nogen?
        </p>
        <h3 className="text-2xl font-semibold text-dark-text">
          Så ring til{" "}
          <span className="text-regular-green font-bold">23808237</span>. <br />
          Vi har åbent mandag, onsdag og fredag mellem kl. 16 - 18
        </h3>
        <a className="font-semibold ">Eller kontakt os anonymt</a>
      </div>
    </div>
  );
}

export default Hand;
