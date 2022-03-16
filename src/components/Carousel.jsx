import React from "react";
import Slider from "react-slick";
import carousel from "../assets/images/carousel.png";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={carousel} alt="" />
      </div>
      <div>
        <img src={carousel} alt="" />
      </div>
      <div>
        <img src={carousel} alt="" />
      </div>
      <div>
        <img src={carousel} alt="" />
      </div>
    </Slider>
  );
}
