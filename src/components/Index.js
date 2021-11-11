import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="w-full flex justify-center px-6 lg:px-12 lg:pr-44 xl:px-14 xl:pr-64 2xl:px-32 2xl:pr-80">
        <div
          data-aos="fade-left"
          className="bg-regular-green h-18 pt-2 w-full lg:h-20 lg:w-4/5 2xl:w-3/5 "
        >
          <h2 class="text-4xl font-black text-biege-text transform translate-y-3 px-6 lg:text-center md:text-4xl stroke-green lg:translate-y-11 lg:ml-0  2xl:translate-y-11">
            Se de events der nærmer sig
          </h2>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className=" mb-28 2xl:mx-auto 2xl:container flex justify-center"
      >
        <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
          {/* Carousel for Small-Sized Screen */}
          <CarouselProvider
            className="relative block sm:hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="js-flickity flex justify-center items-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <Slider>
                <Slide index={0}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Udendørs Hygge
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Udendørs Hygge
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="chairs"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Fredags Musik
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="chairs"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Fredags Musik
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                        alt="chair"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Julefrokost
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                        alt="chair"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Julefrokost
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for Medium and Large-Sized Screen */}
          <CarouselProvider
            className="relative hidden sm:block"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
            visibleSlides={1}
            step={1}
            infinite={true}
            currentSlide={1}
          >
            <div className="js-flickity flex justify-center items-center">
              <Slider className="carousel__sliderLarge">
                <Slide className="carousel__inner-slideLarge" index={0}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Udendørs Hygge
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Udendørs Hygge
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={1}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="chairs"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Fredags Musik
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="chairs"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Fredags Musik
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={2}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                        alt="chair"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Julefrokost
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                        alt="chair"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                          Julefrokost
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
            </div>
          </CarouselProvider>
        </div>
      </div>

      <style>
        {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
      </style>
    </div>
  );
}
