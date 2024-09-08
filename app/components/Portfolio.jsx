"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioCard from "./PortfolioCard";
import { workPortfolio } from "../data/data";
const Portfolio = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="mt-[90px] max-w-[70%] mx-auto ">
      <p className=" text-[24px] uppercase px-[40px] tracking-[0.5em] text-[#7b61ff] font-semibold">
        portfolio
      </p>
      <Slider {...settings}>
        {workPortfolio.map((data) => (
          <PortfolioCard
            key={data.id}
            work={data.work}
            type={data.type}
            image={data.image}
            number={data.number}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
