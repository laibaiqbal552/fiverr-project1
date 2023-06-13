import React from "react";
import Q from "./../images/q.png";
const Testimonial = () => {
  return (
    <div className="pb-20 md:mx-12 mx-5">
      <div className="flex justify-between mb-4 ">
        <p className="text-white  text-3xl font-bold syne ">Testimonial</p>{" "}
        <img
          src={Q}
          alt=""
          className="-rotate-[13deg] md:max-h-[80px] md:max-w-[80px] md:w-full"
        />
      </div>
      <div className="max-w-[800px] w-full">
        <p className="text-[#949494] text-base mb-4">
          {`“Aaronn was fantastic to work with from start to finish. We were
          looking for a simple, stand-out logo and he delivered. I tried
          designing the logo myself thinking I wouldn’t need to pay the money
          for a professional graphic designer but I was very wrong. Working with
          Aaronn was worth every penny and was surprisingly affordable! I
          remember him saying simplicity is key to a successful logo and boy he
          was right. I can’t thank Aaronn enough for his effort and
          professionalism. I would recommend him to anyone looking for a
          design!”`}
        </p>
        <p className="text-white mb-4 text-lg font-bold syne ">-Martin lee</p>
      </div>
    </div>
  );
};

export default Testimonial;
