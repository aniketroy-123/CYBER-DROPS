import React from "react";
import playbit from "../assets/png/playbit-img.png";
import partnersecond from "../assets/png/partner-24-img.png";
import trading from "../assets/png/Trading-hive-img.png";
import focusgroup from "../assets/png/Focus-group-img.png";
const Partner = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center font-4xl fw-600 text-white py-4 py-sm-5 py-md-0">
              Part<span className="text-brown ">ners</span>
            </h2>
          </div>
        </div>
      </div>
      <section className="partner mb-5 mb-lg-0 py-4 py-sm-5 position-relative">
        <div className="container py-md-5">
          <div className="d-flex justify-content-center align-items-center partner-content">
            <div>
              <div className="py-2 playbit text-center">
                <img
                  className="w-100 px-2 px-lg-4 py-2"
                  src={playbit}
                  alt="playbit"
                />
              </div>
              <h6 className="font-md text-center mb-4 mt-md-4 mb-md-0 fw-600">
                Playbit
              </h6>
            </div>
            <div>
              <div className="py-2 capital text-center">
                <img
                  className="w-100 px-2 px-lg-4 py-2"
                  src={partnersecond}
                  alt="partnersecond"
                />
              </div>
              <h6 className="font-md text-center mb-4 mt-md-4 mb-md-0 fw-600">
                24 Capital
              </h6>
            </div>
            <div>
              <div className="py-2 capital text-center">
                <img
                  className="w-100 px-2 px-lg-4 py-2"
                  src={trading}
                  alt="partnersecond"
                />
              </div>
              <h6 className="font-md text-center mb-4 mt-md-4 mb-md-0 fw-600">
                TradingHive
              </h6>
            </div>
            <div className="mt-4 mt-lg-0">
              <div className="py-2 capital text-center">
                <img
                  className="w-100 px-2 px-lg-4 py-2"
                  src={focusgroup}
                  alt="partnersecond"
                />
              </div>
              <h6 className="font-md text-center mb-4 mt-md-4 mb-md-0 fw-600">
                Focus Group Equities
              </h6>
            </div>
          </div>
        </div>
        <div className="buisness-line w-100 mt-4 mt-md-0">
          <p className="font-md text-brown fw-bold text-center">
            For business and collaborations, contact us team@cyberdrops.finance
          </p>
        </div>
      </section>
    </>
  );
};
export default Partner;
