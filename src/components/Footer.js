import React from 'react'
import '../styles/global.css';
import logo from '../images/logo.png';

//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function Footer() {
   return (
      <div className="bg-dark-text">
         <div className=" pt-7">
            <div className="max-w-screen-lg px-4 sm:px-6 text-biege-text sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
               <div className="h-full object-cover relative">
                  <img src={logo} className="absolute top-10 left-10" alt="logo" />
               </div>
               <div className="p-5">
                  <div className="text-m uppercase text-orange-text font-bold">Navigation</div>
                  <a className="my-3 block" href="/#">Hjem <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Mere Om os <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Hånden På Hjertet<span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Podcast<span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Events <span className="text-teal-600 text-xs p-1"></span></a>
               </div>
               <div className="p-5">
                  <div className="text-m uppercase text-orange-text font-bold">Events</div>
                  <a className="my-3 block" href="/#">Udendørs Hygge <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Fredags Musik <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Julefrokost <span className="text-teal-600 text-xs p-1"></span></a>
               </div>
               <div className="p-5">
                  <div className="text-m uppercase text-orange-text font-bold">Kontakt os</div>
                  <a className="my-3 block" href="/#">Sct Peders Kirkeplads 16, 4700 Næstved <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">55 72 31 90 <span className="text-teal-600 text-xs p-1"></span></a>
               </div>
            </div>
         </div>

         <div className="pb-5 text-center text-biege-text">© Copyright 2020. All Rights Reserved.</div>
      </div>






   )
}

export default Footer
