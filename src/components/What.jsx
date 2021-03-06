import React from "react";
import fourumberla from "../assets/images/fourumberla.png";
import whatweside from "../assets/images/whatweside.png";
const What = () => {
  return (
    <>
      <section className="we-do-section position-relative">
        <div className="whatwe-side position-absolute">
          <img className="w-100" src={whatweside} alt="" />
        </div>
        <div className="container container-modify pb-5 py-lg-5 mb-md-3">
          <div className="row  align-items-center justify-content-between pb-lg-2 ">
            <div className="col-10 col-md-7 col-lg-6  mb-5 mb-lg-0 mx-auto mx-lg-0">
              <div className="me-md-4 me-xxl-5">
                <img className="w-100" src={fourumberla} alt="fourumberla" />
              </div>
            </div>
            <div className="col-12 col-lg-6  mt-5">
              <div className="ms-lg-4 ms-xxl-5">
                <h2 className="font-4xl text-white text-center text-lg-start">
                  What <span className="text-brown">we do</span>
                </h2>
                <p className="para text-center text-md-start text-white opacity-75">
                  1000 Cyber Drops will be dropping on Ethereum in March 2022.
                  Each and every Cyber Drop is uniquely hand crafted. This is
                  just the beginning of our journey. Owning a Cyber Drop will
                  unlock monthly airdrops and future governance rights in
                  addition to our revolutionary algorithm. We strive to always
                  bring innovation and keep BUILDing. Cyber Drops is a community
                  driven project and always will be that way. That’s our
                  promise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default What;
