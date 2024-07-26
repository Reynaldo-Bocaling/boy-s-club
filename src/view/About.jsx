import React from "react";
import { member } from "../constants";

const About = () => {
  return (
    <section id="members" className="relative h-00px]">
      <div className="max-w-7xl mx-auto flexColCenter py-7">
        <h1 className="text-5xl">The Boy's Club Members</h1>
        <div className="flexCenter gap-7 mt-7">
          {member.map((item, index) => (
            <div
              key={index}
              className={`${
                item.translateY && "translate-y-12"
              } relative aboutMemberBox`}
            >
              <div className=" relative flex flex-col items-center gap-5 bg-white h-[400px] py-7 px-5 z-[88]">
                <h1 className="text-4xl text-[#02d5ff] font-bold text-center">
                  {item.name}
                </h1>
                <p className="text-justify text-sm normal font-semibold text-gray-500">
                  {item.info}
                </p>
                <img src={item.img} alt="" className="absolute bottom-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
