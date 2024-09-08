import React from "react";
import Marquee from "react-fast-marquee";

const TextMarquee = () => {
  return (
    <>
      <Marquee pauseOnHover={true} >
        <div className="marqueee-wrapper flex text-[40px] gap-[30px] uppercase bg-[#4862e3] py-[20px] font-bold">
          <li>creative agency</li>
          <li>creative agency</li>
          <li>creative agency</li>
          <li>creative agency</li>
          <li>creative agency</li>
        </div>
      </Marquee>
    </>
  );
};

export default TextMarquee;
