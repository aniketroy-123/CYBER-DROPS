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
      <section className="partner py-5">
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

            <div>
              <div className="py-2 capital text-center">
                <img
                  className="w-100 px-2 px-lg-4 py-2"
                  src={partnersecond}
                  alt="partnersecond"
                />
              </div>

            <div>
              <div className="py-2 capital text-center">
                <img
                  className="w-100 px-2 px-lg-4 py-2"
                  src={trading}
                  alt="partnersecond"
                />
              </div>

            <div>
              <div className="py-2 capital text-center">
                <img
                  className="w-100 px-2 px-lg-4 py-2"
                  src={focusgroup}
                  alt="partnersecond"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Partner;
