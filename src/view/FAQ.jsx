import React from "react";
import { faq } from "../constants";

const FAQ = () => {
  return (
    <section className="relative w-full  ">
      <div className="max-w-7xl mx-auto flexCenter gap-12 pt-20 pb-12 px-9">
        <div className="w-1/2 ">
          <h1 className="text-4xl text-blue-500">FREQUENTLY ASKED QUESTIONS</h1>
          <img src="/img/tokenomics.png" alt="" className="w-1/1" />
        </div>
        <div className="w-1/2 flexColStart gap-5">
          {faq.map((item, index) => (
            <div key={index} className="relative aboutMemberBox">
              <div className=" relative  bg-white  py-4 px-5 z-[88]">
                <h1>{item.title}</h1>
                <p className="normal text-sm text-gray-500">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
