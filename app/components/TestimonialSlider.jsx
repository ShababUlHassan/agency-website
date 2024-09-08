"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard"
import {reviews} from "../data/data"

const TestimonialSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="slider-wrapper w-[85%] mt-[5%] ">
        <Slider {...settings}>
          {
            reviews.map((review) => <ReviewCard key={review.id} name={review.name} work={review.work} rating={review.rating} image={review.image} disc={review.disc} /> )
          }
            
        </Slider>
      </div>
    </>
  );
};

export default TestimonialSlider;
