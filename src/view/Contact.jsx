import React from "react";
import { socialLinks } from "../constants";

const Contact = () => {
  return (
    <div className="w-full  mt-20">
      <div className="relative max-w-7xl mx- flexColCenter gap-9 mb-7">
        <div className="flexCenter gap-3">
          <img src="/img/NFT1.png" className="w-[40px]" alt="" />
          <h1 className="text-4xl">The boy's CLUB</h1>
        </div>
        <h1 className="normal font-bold  text-3xl text-center leading-10">
          WE'D LOVE HEAR FROM YOU! LET'S CHAT ABOUT <br /> THE BOY'S CLUB.
        </h1>
        <ul className="flexCenter gap-4">
          {socialLinks.map((item, index) => (
            <li
              key={index}
              className="w-[50px] h-[50px] rounded-full bg-blue-500 flexCenter"
            >
              <a href="">
                <img src={item.img} alt="" />
              </a>
            </li>
          ))}
        </ul>

        <img
          src="/img/tokenomics.png"
          className="absolute left-12 -bottom-7 max-w-xs"
          alt=""
        />
      </div>
      <div className="w-full bg-white flexCenter py-5">
        <h1 className="text-4xl">Buy Now</h1>
      </div>
    </div>
  );
};

export default Contact;
