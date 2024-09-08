import React from "react";
import TestimonialSlider from "./TestimonialSlider"

const Testimonial = () => {
  return (
    <div className="testimonial bg-[#252730] py-[120px] pb-[150px] flex flex-col items-center ">
      <div className="text-center">
        <p className="text-[24px] uppercase tracking-[0.5em] text-[#7b61ff] font-semibold">
          Testimonials
        </p>
        <h2 className="uppercase text-[70px] font-extrabold outline-text light-gray">
          from our 
        </h2>
        <h2 className=" uppercase text-[70px] font-extrabold text-white leading-[60px]">
          beloved client
        </h2>
      </div>

      <TestimonialSlider />
    </div>
  );
};

export default Testimonial;
