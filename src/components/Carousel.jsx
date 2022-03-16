import React from "react";
import Slider from "react-slick";
import nftdogs from "../assets/img/nftdogs.png";
import nftdogsecond from "../assets/img/nftdogsecond.png";
import nftthird from "../assets/img/nftthird.png";
import nftforth from "../assets/img/nftforth.png";
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1200,
    autoplay: true,
    Arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 595,
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
    <>
      <section
        className="bg-color-black py-5 position-relative py-5 my-xl-5"
        id="line-up"
      >
        <div className="container mt-lg-5">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1 className="heading text-brown ff_comicGecko mb-0 text-shadow">
                NFT COLLECTION
              </h1>
            </div>
          </div>
          <div className="row">
            <div
              className="col-10 col-md-12 mx-auto text-center zindex-1000"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Slider
                className="px-md-4 px-lg-5 px-xl-3 pb-2 pb-sm-0 text-center"
                {...settings}
              >
                <div className="px-sm-3">
                  <div className="carousel-card py-3 px-3 w-100 mx-auto">
                    <div className="nftdogs position-relative">
                      <img className="w-100 pt-1" src={nftdogs} alt="nftdogs" />
                    </div>

                    <h1 className="sub-heading text-brown ff_comicGecko mt-3 mb-0 carousel-heading">
                      LOREM IPSUM
                    </h1>
                  </div>
                </div>
                <div className="px-sm-3">
                  <div className="carousel-card py-3 px-3 w-100 mx-auto">
                    <div className="nftsecond">
                      <img
                        className="w-100  pt-2"
                        src={nftdogsecond}
                        alt="nftdogs"
                      />
                    </div>

                    <h1 className="sub-heading text-brown ff_comicGecko mt-3 mb-0 carousel-heading">
                      LOREM IPSUM
                    </h1>
                  </div>
                </div>
                <div className="px-sm-3">
                  <div className="carousel-card py-3 px-3 w-100 mx-auto">
                    <div className="nftthird position-relative">
                      <img
                        className="w-100 pt-1"
                        src={nftthird}
                        alt="nftdogs"
                      />
                    </div>
                    <h1 className="sub-heading text-brown ff_comicGecko mt-3 mb-0 carousel-heading">
                      LOREM IPSUM
                    </h1>
                  </div>
                </div>
                <div className="px-sm-3">
                  <div className="carousel-card py-3 px-3 w-100 mx-auto">
                    <div className="nftdogs position-relative">
                      <img
                        className="w-100 pt-1"
                        src={nftforth}
                        alt="nftdogs"
                      />
                    </div>

                    <h1 className="sub-heading text-brown ff_comicGecko mt-3 mb-0 carousel-heading">
                      LOREM IPSUM
                    </h1>
                  </div>
                </div>
                <div className="px-sm-3">
                  <div className="carousel-card py-3 px-3 w-100 mx-auto">
                    <div className="nftthird position-relative">
                      <img className="w-100" src={nftthird} alt="nftdogs" />
                    </div>

                    <h1 className="sub-heading text-brown ff_comicGecko mt-3 mb-0 carousel-heading">
                      LOREM IPSUM
                    </h1>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center mt-5">
              <h1 className="sub-heading text-brown ff_comicGecko mb-2 text-shadow">
                Max supply: 100000000000
              </h1>
              <button className="common-btn mt-4 fs-sm">Mint Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
