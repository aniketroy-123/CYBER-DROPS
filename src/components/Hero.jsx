import React from "react";
// import HeroImg from "../assets/png/hero-img.png";
// import HeroImg from "../assets/png/new-umb-img.png";
import HeroImg from "../assets/png/new-umb-img-2.png";

const Hero = () => {
  return (
    <>
      {/* <!--================================== HERO SECTION =====================================--> */}
      <section id="Home">
        <div className="container my-xxl-3 pb-5 py-md-5 container-modify">
          <div className="row justify-content-between align-items-center">
            <div
              className="z-index-1 col-12 col-lg-6 col-xxl-6 my-4 my-sm-5 my-lg-0 order-2 order-lg-1"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <div className="  text-white text-center text-lg-start">
                <h1 className="font-5xl fw-600 mb-sm-0">
                  Welcome to <br />
                  <span className="text-brown fw-800"> Cyber Drops</span>
                </h1>
                <p className="para mt-sm-4 pt-sm-1 mb-4 mb-sm-5">
                  Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                  tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit
                  nec curabitur purus. Ullamcorper mattis risus suspendisse
                  pretium tristique.
                </p>
                <button className="brown-btn d-block mx-auto mx-lg-0">
                  Explore Now
                </button>
              </div>
            </div>
            <div
              className="z-index-1 col-10 col-sm-9 col-md-6 col-lg-5 col-xxl-4 mx-auto mx-lg-0 order-1 order-lg-2 text-center ps-xl-5 ps-xxl-0"
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <img
                className="w-100 ps-xl-5 ps-xxl-0 hero-image"
                src={HeroImg}
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--================================== HERO SECTION =====================================--> */}
    </>
  );
};

export default Hero;
