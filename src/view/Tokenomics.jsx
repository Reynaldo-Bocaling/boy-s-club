import React from "react";
import { tokenomics } from "../constants";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative   bg-reds-500">
      <div className="w-full flexColCenter absolute bottom-1/4 translate-y-1/2 ">
        <h1 className="text-7xl font-bold">Tokenomics</h1>
        <div className="flexCenter gap-7 mt-12">
          {tokenomics.map((item, index) => (
            <div key={index} className="flexColCenter gap-3">
              <h1 className="text-white text-6xl">{item.value}</h1>
              <p className="text-xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" tokenomicsBox absolute left-1/2 -translate-x-1/2 -bottom-5 px-12 py-3">
        TOTAL SUPPLY: 1,000,000,000
      </div>
      <img
        src="/img/tokenomics_bg.png"
        alt=""
        className="-mt-[20rem] w-full h-[1000px]"
      />
    </section>
  );
};

export default Tokenomics;
