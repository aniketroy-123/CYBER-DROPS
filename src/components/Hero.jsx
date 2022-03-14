import React from "react";
import HeroImg from "../assets/png/hero-img.png";

const Hero = () => {
  return (
    <>
      {/* <!--================================== HERO SECTION =====================================--> */}
      <section>
        <div className="container my-xxl-3 py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-6 col-xxl-6 my-4 my-sm-5 my-lg-0 order-2 order-lg-1">
              <div className="pe-xxl-5 me-xxl-5 text-white text-center text-lg-start">
                <h1 className="font-4xl fw-600 mb-sm-0">
                  Welcome to
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
            <div className="col-10 col-sm-9 col-md-6 col-lg-5 col-xxl-4 mx-auto mx-lg-0 order-1 order-lg-2">
              <img className="w-100 ps-xl-5" src={HeroImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--================================== HERO SECTION =====================================--> */}
    </>
  );
};

export default Hero;
