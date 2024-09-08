import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = () => {
  return (
    <>
      <div className="btn flex items-center justify-center gap-2 py-[10px] bg-[#7b61ff] w-[162px]">
        <button className=" capitalize">more detail</button>
        <IoIosArrowForward />
      </div>
    </>
  );
};

export default Button;
