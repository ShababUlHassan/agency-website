import React from "react";
import Image from "next/image";
import Stars from "./parts/Stars"

const ReviewCard = ({name,work,rating,image,disc}) => {
  return (
    <div className="border border-gray-400 p-[30px] flex flex-col gap-[30px] mx-4">
        <Stars rating={rating} />
      <p>
        {disc}
      </p>
      <div className="profile flex items-center gap-3 mt-[20px]">
        <Image
        className="rounded-full"
        src={image}
        height={50}
        width={50}
        alt="profile-img"
        />
        <div className="profile-disc">
            <p className="text-[15px] capitalize">{name}</p>
            <p className=" font-light capitalize text-[#ffffff94] text-[12px]">{work}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
