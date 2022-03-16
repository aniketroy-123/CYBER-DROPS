import React from "react";
import MissionImg from "../assets/png/mission-img.png";
import BlurImg2 from "../assets/png/blur-img-2.png";
import BlurImg3 from "../assets/png/right-blur-img.png";

const Mission = () => {
  return (
    <>
      {/* <!--================================ OUR MISSION SECTION  ================================ --> */}
      <section className="position-relative" id="About">
        <div className="position-absolute blur-img-2 d-none d-md-block">
          <img src={BlurImg2} alt="Blur-Img-2" />
        </div>
        <div className="container pb-5 py-lg-5 container-modify">
          <div className="row d-md-flex justify-content-between align-items-center my-xxl-3">
            <div
              className="z-index-1 col-10 col-sm-8 col-md-6 col-lg-5 col-xxl-5 mx-auto mx-lg-0"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <div className="px-5 px-sm-0 ms-lg-4 mx-xxl-0">
                <img src={MissionImg} className="w-100" alt="mission-img" />
              </div>
            </div>
            <div
              className="z-index-1 col-12 col-lg-6 col-xxl-5 mt-5 mt-lg-0 mb-5 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <div className="ps-xxl-4 text-center text-lg-start text-white">
                <p className="para-heading mb-0">
                  Our <span className="text-brown">Mission</span>
                </p>
                <p className="par mt-3 pt-sm-1 mb-4 mb-sm-3 mb-sm-5 pb-lg-0">
                  We understand that one of the biggest concerns for early-stage
                  investors is that it can quickly become stressful,
                  overwhelming, and especially extremely time consuming. It
                  isn’t easy to balance a full time job, family, and an active
                  investment portfolio, especially when just starting out.
                </p>
                <button className="brown-btn d-block mx-auto mx-lg-0">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute blur-img-3 d-none d-md-block">
          <img src={BlurImg3} alt="Blur-Img-2" />
        </div>
      </section>
      {/* <!--================================ OUR MISSION SECTION  ================================ --> */}
    </>
  );
};

export default Mission;
