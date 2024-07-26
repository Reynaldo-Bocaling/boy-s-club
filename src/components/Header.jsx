import React from "react";
import { navlinks } from "../constants";

const Header = () => {
  return (
    <header className="relative z-[99]">
      <nav className="max-w-7xl mx-auto py-3 flexBetween">
        <h1 className="title text-xl font-bold">The Boy's Club</h1>
        <ul className="flexCenter gap-7">
          {navlinks.map((item, index) => (
            <li>
              <a href={item.url} className="text-lg text-white">
                {" "}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="title btnStyle  ml-10 px-8 pt-3 py-7 bg-red-s">
          Buy Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
