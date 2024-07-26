import React from "react";
import SlideText from "../components/SlideText";
import { h_img } from "../constants";

const Hero = () => {
  return (
    <section id="hero " className="relative mt-14  z-[98]">
      <div className="heroLine_bg relative max-w-7xl  w-full mx-auto h-[400px] md:h-[550px] flex pt-12 border-[2px]  pl-9">
        <div className="max-w-md w-full  mx-auto bg-[#02d5ff] py-4 absolute left-1/2 -translate-x-1/2 -translate-y-20 flexCenter gap-7">
          {h_img.map((item, index) => (
            <div
              key={index}
              className="relative w-[70px] h-[70px] bg-white rounded-full -translate-y-5 overflow-hidden border-[3px] border-blue-500"
            >
              <img src={item} className="w-full absolute bottom-0 left-0" />
            </div>
          ))}
        </div>
        <div className="w-1/2 z-[98]">
          <h3 className="text-xl font-bold text-white mb-4">Please Join</h3>
          <h1 className="title text-5xl md:text-7xl font-bold text-white">
            Unleash The Fun with The Boy's Club
          </h1>
          <h2 className="text-white text-2xl font-bold mt-9">
            Meet The Boy's Club
          </h2>
        </div>
        <div className="w-1/2 translate-y-24">
          <img src="/img/hero.png" alt="" />
        </div>

        <img
          src="/img/tokenomics.png"
          className="absolute left-0 bottom-0 max-w-2xl opacity-[0.09] pointer-events-none"
          alt=""
        />
      </div>
      <SlideText />
    </section>
  );
};

export default Hero;
