import React from "react";
import Img2 from "./../images/Vector 8.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="lg:mb-0">
      <div className=" lg:mb-16 md:mb-12 md:h-[60vh] h-[50vh] flex justify-center items-center">
        <div className="relative  ">
          <h1 className=" lg:max-w-[627px] max-w-[450px]  w-full text-center md:text-5xl  text-3xl font-sans font-bold text-white">
            Adaptive Logo Design for Your Brand
          </h1>
          <img src={Img2} alt="" className="absolute z-10  -right-12 -top-20" />
        </div>
      </div>
      <div className="flex  justify-center relative ">
        <button className="bg-orangePrimary flex gap-1 items-center px-5 p-1 z-20 md:-top-36 -top-[90px] absolute border-orangePrimary text-[#F4F7FA] rounded-2xl border">
          Explore Works
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
