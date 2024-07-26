import React from "react";
import Marquee from "react-fast-marquee";

const SlideText = () => {
  return (
    <div className="relative">
      <div className="bg-sky-500 title py-5 w-full overflow-x-hidden flexBetween gap-7 -rotate-2 -translate-y-9">
        {Array.from({ length: 5 }, (_, i) => {
          return <center className="">The boy's Club</center>;
        })}
      </div>
      <Marquee
        direction="right"
        className="title font-bold bg-white py-5 w-full overflow-x-hidden flexBetween gap-9   -translate-y-9 absolute top-0 left-0 border-dashed border-y-[2px] border-blue-500"
      >
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="mx-10  flexCenter gap-12">
            <h1>the boy's club</h1>
            <h1 className="">*</h1>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SlideText;
