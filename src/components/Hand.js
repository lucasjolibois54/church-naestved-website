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
    <div className="flex w-full">
      <div className="w-3/5">
        <img src={barn} className="h-full" />
      </div>
      <div className="w-2/5 pl-10">
        <h3 className="text-2xl">Hånden på hjertet</h3>
        <h1 className="text-5xl">Til dig mellem 10 til 20 år</h1>
        <p className="text-xl">
          Går du og bekymrer dig, er ked af det og måske har brug for at snakke
          med nogen?
        </p>
        <h3 className="text-2xl">
          Så ring til <span>23808237</span> <br /> Vi har åbent mandag, onsdag
          og fredag mellem kl. 16 - 18
        </h3>
        <a>Eller kontakt os anonymt</a>
      </div>
    </div>
  );
}

export default Hand;
