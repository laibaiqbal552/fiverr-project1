import React from "react";
import Img2 from "./../images/Vector 8.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="lg:mb-0">
      <div className=" lg:mb-16 md:mb-12  h-full md:min-h-[60vh] sm:min-h-[50vh] min-h-[40vh] flex justify-center items-center">
        <div className="relative  ">
          <h1 className=" lg:max-w-[627px] max-w-[450px] z-10  w-full text-center md:text-5xl  text-3xl font-sans font-bold text-white">
            Adaptive Logo Design for Your Brand
          </h1>
          <img
            src={Img2}
            alt=""
            className="absolute z-[9]  -right-48 -top-56"
          />
          <div className="flex  justify-center  ">
            <button className="bg-orangePrimary flex gap-1 mt-12 items-center px-5 p-1 z-20  border-orangePrimary text-[#F4F7FA] rounded-2xl border">
              Explore Works
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
