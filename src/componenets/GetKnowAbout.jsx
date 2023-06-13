import React from "react";
import Img3 from "./../images/Rectangle 361.png";
import Img4 from "./../images/Rectangle 363.png";
import Img5 from "./../images/Rectangle 362.png";
const GetKnowAbout = () => {
  return (
    <div className="lg:px-12 px-5 grid md:grid-cols-2 grid-cols-1  gap-6">
      <div className="lg:mt-28 md:mt-12 md:order-1 order-2">
        <p className="text-white mb-1 md:text-left text-center lg:text-2xl text-xl font-bold font-sans">{`Let’s get know about me closer`}</p>
        <p className="text-[#A8A8A8] text-sm mb-7 md:text-left text-center">
          Aaronn is a New York-based visual designer focusing on branding and
          visual identity. Her portfolio showcases her wide range of work,
          spanning books, posters and web design.
        </p>
        <div className="flex md:justify-start justify-center">
          <button className="bg-orangePrimary px-5 py-1 border-orangePrimary text-[#F4F7FA] rounded-2xl border ">
            Explore Works
          </button>
        </div>
      </div>
      <div className="mt-12 md:order-2 order-1 ">
        <div className="flex justify-center relative">
          <img
            src={Img4}
            alt=""
            className="w-16 h-8 absolute top-10 right-16"
          />
          <img
            src={Img5}
            alt=""
            className="w-8 h-[65px] left-[55px] absolute bottom-16 "
          />
          <img src={Img3} alt="" className="w-[70%] h-full " />
        </div>
      </div>
    </div>
  );
};

export default GetKnowAbout;
