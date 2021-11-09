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
    <div className="flex flex-col w-full xl:flex-row">
      <div className="w-full xl:w-5/10">
        <img src={barn} className="h-full" />
      </div>
      <div className="flex text-center font-sans flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
        <h3 className="text-2xl pt-10 font-bold text-regular-green">
          Hånden på hjertet
        </h3>
        <h2 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black text-dark-text">
          Til dig mellem <br />
          <span className="text-regular-green"> 10 til 20 år</span>
        </h2>
        <p className="text-xl px-5 text-dark-text py-3 md:px-24 xl:pl-0 xl:pr-48">
          Går du og bekymrer dig, er ked af det eller måske bare mangler en at
          snakke med? Du er aldrig alene, tag hånden på hjertet, ring ind til os
          og snak med en af vores præster. Vi sidder klar til at hjælpe dig, du
          er helt anonym og vi har selvfølgelig tavhedspligt. <br /> <br />
          Vores telefon har åbent mandag, onsdag og fredag mellem kl. 16 - 18.
        </p>
        <h3 className="text-2xl font-semibold text-dark-text pb-5 pt-2">
          Så ring til{" "}
          <span className="text-regular-green font-bold">23808237</span>.
        </h3>
        <div className="flex justify-center text-center items-center py-3 xl:justify-start">
          <a
            href="https://tailwindcss.com/docs/responsive-design"
            className="font-semibold bg-dark-green px-4 py-2 text-biege-text rounded"
          >
            Eller kontakt os anonymt <span className="font-black">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hand;
