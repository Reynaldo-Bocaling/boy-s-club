import React from "react";
import SlideText from "../components/SlideText";

const Hero = () => {
  return (
    <section id="hero " className="relative mt-14  z-[98]">
      <div className="heroLine_bg relative max-w-7xl  w-full mx-auto h-[400px] md:h-[550px] flex pt-12 border-[2px]  pl-9">
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
