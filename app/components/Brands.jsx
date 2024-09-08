import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <div className=" py-[50px] bg-[#252730]">
      <div className="logos-wrapper max-w-[80%] flex justify-between items-center mx-auto">
        <Image className=" h-auto w-auto" alt="brands-logo" src="/microsoft.png" width={170} height={60} />
        <Image className=" h-auto w-auto" alt="brands-logo" src="/amazon.png" width={170} height={60} />
        <Image className=" h-auto w-auto" alt="brands-logo" src="/google.png" width={170} height={60} />
        <Image className=" h-auto w-auto" alt="brands-logo" src="/prime.png" width={170} height={60} />
        <Image className=" h-auto w-auto" alt="brands-logo" src="/youtube.png" width={120} height={40} />
      </div>
    </div>
  );
};

export default Brands;
