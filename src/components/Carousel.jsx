import React from "react";
import Slider from "react-slick";
import carousel from "../assets/images/carousel.png";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              <div className="d-flex carousel-card">
                <img className="w-100 carousel-images" src={carousel} alt="" />
                <div>
                  <h2 className="font-xl fw-800 ">Varun Muthu</h2>
                  <h6>(CFO- Chief Financial Officer)</h6>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
