import React from "react";
import BlurImg2 from "../assets/png/blur-img-2.png";
import BlurImg3 from "../assets/png/right-blur-img.png";
import threeumberla from "../assets/images/threeumberla.png";
const Onlogo = () => {
  return (
    <>
      <section className="position-relative">
        <div className="position-absolute blur-img-4 d-none d-md-block">
          <img src={BlurImg2} alt="Blur-Img-2" />
        </div>
        <div className="container container-modify pb-3 pb-lg-0 mb-3 my-lg-5">
          <div className="row d-flex justify-content-between align-items-center flex-row-reverse">
            <div
              className="z-index-1 col-10 col-md-7 col-lg-6 mx-auto mx-lg-0"
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <div className="ps-lg-5">
                <img
                  className="w-100 ps-lg-5"
                  src={threeumberla}
                  alt="threeumberla"
                />
              </div>
            </div>
            <div
              className="z-index-1 col-12 my-5 col-lg-6 col-xxl-6 pt-5 pt-lg-0"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <div className="pe-lg-4 pe-xl-5 pe-xxl-0">
                <h2 className="font-4xl text-white text-center text-lg-start">
                  Our <span className="text-brown">Algo</span>
                </h2>
                <p className="para text-center text-md-start text-white opacity-75">
                  We have perfected our algorithm, which prioritizes a low risk
                  and consistent profit stream without the need for daily
                  micromanagement. While most trading algorithms can’t stand up
                  against a volatile or risky market, our algorithm thrives in
                  those conditions. Early-stage testers have seen a consistent
                  flow of income with minimal ups and downs. Our algorithm has
                  been in the works for YEARS. This has given us the time to
                  rigorously backtest and release any needed hotfixes. As of
                  early March 2022, we have close to a quarter of a million
                  under direct management!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute blur-img-5 d-none d-md-block">
          <img src={BlurImg3} alt="Blur-Img-2" />
        </div>
      </section>
    </>
  );
};

export default Onlogo;
