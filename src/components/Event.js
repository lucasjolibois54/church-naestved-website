import React from "react";
import "../styles/global.css";
import "../styles/stroke.css";
import event from "../images/billedeAfEvent.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Event() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
  return (
    <div>
      <div class="  mb-32  lg:py-12 lg:flex lg:justify-center">
        <div class="lg:mx-8 lg:flex lg:max-w-8xl lg:rounded-lg">
          <div class="lg:w-9/12 2xl:w-full">
            <div class="h-64 bg-cover lg:rounded-lg lg:h-96 2xl:w-full 2xl:h-full">
              <img  data-aos="fade-right" src={event} className="h-full 2xl:w-full" alt="" />
            </div>
          </div>
          <div class="py-12 max-w-xl lg:max-w-2xl lg:w-full lg:py-0 2xl:max-w-3xl">
            <div data-aos="fade-left"  className="bg-regular-green h-18 pt-2 lg:h-20">
              <h2  class="text-4xl font-black text-biege-text transform translate-y-3 ml-5 lg:text-center md:text-4xl stroke-green lg:translate-y-11 lg:ml-0  2xl:translate-y-11">
                Hør mere om vores events
              </h2>
            </div>
            <p  data-aos="fade-left" class="text-dark-text text-l mt-12 mx-6 lg:pr-20 lg:mt-10 lg:pl-12 2xl:pr-28 2xl:mt-12">
              Som en del af vores nye koncept, er vi i samrbejde med vores kirke
              begyndt på at lave events hvorpå vores fokus er at skabe et
              fællesskab. Alle events er gratis, og vi holder alt fra musik
              events, mad, fredags hygge, rap gydstjenester og meget mere. Dette
              er ikke noget du vil gå glip af!
            </p>
            <div class="mt-8 ml-6 lg:pl-12 lg:mt-4">
              <a  data-aos="fade-left"
                href="https://www.facebook.com/FontGen/"
                className="bg-dark-green hover:bg-light-green px-4 py-3 md:font-semibold text-biege-text inline-flex items-center space-x-2 rounded"
              >
                <span >Lær mere om events</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
