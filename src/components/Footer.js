import React from 'react'
import '../styles/global.css';

//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function Footer() {
    return (
        <div>
           <div className=" pt-7">
   <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
     <div className="p-5">
       <h3 className="font-bold text-xl text-regular-green">COCONUT NUT IS NOT A NUT BUT A LOT OF NUTS LIKE TO NUT</h3>
     </div>
      <div className="p-5">
         <div className="text-m uppercase text-regular-green font-bold">Navigation</div>
         <a className="my-3 block" href="/#">Hjem <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Om os <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Events <span className="text-teal-600 text-xs p-1">Hånden på hjertet</span></a> 
      </div>
      <div className="p-5">
         <div className="text-m uppercase text-regular-green font-bold">COCONUT NUT</div>
         <a className="my-3 block" href="/#">COCO TREE <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">COCONUT <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">COCONUT FAMILY <span className="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div className="p-5">
         <div className="text-m uppercase text-regular-green font-bold">Kontakt os</div>
         <a className="my-3 block" href="/#">Sct Peders Kirkeplads 16, 4700 Næstved <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">55 72 31 90 <span className="text-teal-600 text-xs p-1"></span></a> 
      </div>
   </div>
</div>

      <div className="pb-5 text-center">© Copyright 2020. All Rights Reserved.</div>
   </div>





      
    )
}

export default Footer
