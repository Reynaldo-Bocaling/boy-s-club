import React from "react";

const SlideText = () => {
  return (
    <div className="relative">
      <div className="bg-sky-500 title py-5 w-full overflow-x-hidden flexBetween gap-7 -rotate-2 -translate-y-9">
        {Array.from({ length: 10 }, (_, i) => {
          return <center className="">The boy's Club</center>;
        })}
      </div>
      <div className="title font-bold bg-white py-5 w-full overflow-x-hidden flexBetween gap-7  -translate-y-9 absolute top-0 left-0 border-dashed border-y-[2px] border-blue-500">
        {Array.from({ length: 10 }, (_, i) => {
          return <center className="">The boy's Club</center>;
        })}
      </div>
    </div>
  );
};

export default SlideText;
