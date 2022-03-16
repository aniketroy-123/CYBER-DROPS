import React from "react";
import Slider from "react-slick";
import carousel from "../assets/images/carousel.png";
import link from "../assets/images/link.png";
import carouselsecond from "../assets/images/carouselsecond.png";
import carouselthird from "../assets/images/carouselthird.png";
import carouselforth from "../assets/images/carouselforth.png";
import carouselfifth from "../assets/images/carouselfifth.png";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 1200,
    autoplay: true,
    Arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 599,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section id="Team" className="py-5">
      <div className="container container-modify mb-5">
        <div className="row">
          <div className="col-12" data-aos="fade-top" data-aos-duration="2500">
            <h2 className="text-center text-white font-4xl fw-700">
              Meet the<span className="text-brown">Team</span>
            </h2>
          </div>
        </div>
        <div className="row mt-5 pt-2">
          <div className="col-12" data-aos="fade-top" data-aos-duration="2500">
            <Slider {...settings}>
              <div className="d-flex carousel-card align-items-center mx-auto">
                <img className="w-100 carousel-images" src={carousel} alt="" />
                <div className="ps-3 my-4 my-sm-0">
                  <h2 className="font-xl fw-800 ">Varun Muthu</h2>
                  <h6 className="font-md fw-500">
                    (CFO- Chief Financial Officer)
                  </h6>
                  <p className="font-xsm pe-3">
                    While studying for a degree in Entrepreneurship, Varun
                    founded Focus Group Equities. With his profound experience
                    in legacy markets, Varun serves as a vital asset to Cyber
                    Drops DAO. His background in AI focused trading aligns with
                    our mission to create a decentralized algorithmic trading
                    DAO.
                  </p>
                  <div className="d-flex">
                    <a
                      className="d-flex font-lg text-white text-decoration-none px-4 py-2 align-items-center carousel-btn"
                      href=""
                    >
                      <img className="me-3" src={link} alt="link" /> View
                      Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex carousel-card align-items-center mx-auto">
                <img
                  className="w-100 carousel-images"
                  src={carouselsecond}
                  alt="carouselsecond"
                />
                <div className="ps-3 pt-4 my-4 my-sm-0">
                  <h2 className="font-xl fw-800 ">Shubh Sharma</h2>
                  <h6 className="font-md fw-500">
                    (CFO- Chief Financial Officer)
                  </h6>
                  <p className="font-xsm pe-3">
                    A current fund analyst and student, Shubh hopes to bring his
                    expertise to Cyber Drops DAO. His background in leadership
                    makes him a perfect fit as our Informational Director.
                  </p>
                  <div className="d-flex mt-5">
                    <a
                      className="d-flex font-lg text-white text-decoration-none px-4 py-2 align-items-center carousel-btn"
                      href=""
                    >
                      <img className="me-3" src={link} alt="link" /> View
                      Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex carousel-card align-items-center mx-auto">
                <img
                  className="w-100 carousel-images"
                  src={carouselthird}
                  alt="carouselthird"
                />
                <div className="ps-3 pt-4 my-4 my-sm-0">
                  <h2 className="font-xl fw-800 ">KJ</h2>
                  <h6 className="font-md fw-500">
                    (COO- Chief Operating Officer)
                  </h6>
                  <p className="font-xsm pe-3">
                    Quickly transitioning from his start in legacy markets, KJ
                    discovered trading derivatives and yield farming. He built
                    his brand through his trading and past business ventures
                    making him the perfect fit as our Operations Director.
                  </p>
                  <div className="d-flex mt-5">
                    <a
                      className="d-flex font-lg text-white text-decoration-none px-4 py-2 align-items-center carousel-btn"
                      href=""
                    >
                      <img className="me-3" src={link} alt="link" /> View
                      Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex carousel-card align-items-center mx-auto">
                <img
                  className="w-100 carousel-images"
                  src={carouselforth}
                  alt="carouselforth"
                />
                <div className="ps-3 pt-4 my-4 my-sm-0">
                  <h2 className="font-xl fw-800 ">Bitcoin Playboy</h2>
                  <h6 className="font-md fw-500">
                    (CMO- Chief Marketing Officer)
                  </h6>
                  <p className="font-xsm pe-3">
                    Founder of Playbit, a premier trading community, Bitcoin
                    Playboy brings his expertise in crypto to the team. Playboy
                    also runs Bitcoin ATMs in his free time. He hopes to bring
                    his expertise in business to the table.
                  </p>
                  <div className="d-flex mt-5">
                    <a
                      className="d-flex font-lg text-white text-decoration-none px-4 py-2 align-items-center carousel-btn"
                      href=""
                    >
                      <img className="me-3" src={link} alt="link" /> View
                      Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex carousel-card align-items-center mx-auto">
                <img
                  className="w-100 carousel-images"
                  src={carouselfifth}
                  alt="carouselfifth"
                />
                <div className="ps-3 pt-4 my-4 my-sm-0">
                  <h2 className="font-xl fw-800 ">JR Sockwell</h2>
                  <h6 className="font-md fw-500">
                    (CCO- Chief Compliance Officer)
                  </h6>
                  <p className="font-xsm pe-3">
                    A crypto degen who got his start in crypto with his large
                    investment in Ethereum in 2017, JR oversees and manages
                    regulatory compliance. JR works to ensure that there is
                    complete compliance with international laws
                  </p>
                  <div className="d-flex mt-5">
                    <a
                      className="d-flex font-lg text-white text-decoration-none px-4 py-2 align-items-center carousel-btn"
                      href=""
                    >
                      <img className="me-3" src={link} alt="link" /> View
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
