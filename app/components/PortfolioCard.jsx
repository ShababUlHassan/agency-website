import React from "react";
import Image from "next/image";
import Button from "./Button";
const PortfolioCard = ({work,type,image,number}) => {
  return (
    <div className="relative mt-[60px]">
      <Image
        className="object-cover w-full h-[600px]"
        src={image}
        height={400}
        width={800}
      />
        <div className="card-inner flex justify-between absolute px-[40px] top-0 right-0 left-0 ">
          <div className="content">
            <h3 className="text-[90px] uppercase font-extrabold mt-[-40px] leading-[1em]">{work}</h3>
            <h3 className="text-[90px] uppercase font-extrabold leading-[1.5em] ">{type}</h3>
            <Button />
          </div>
          <div className="number text-[90px] leading-4 font-extrabold outline-text gray-text">{number}</div>
        </div>
    </div>
  );
};

export default PortfolioCard;
