import React from "react";
import juperverse from "../assets/images/juperverse.png";
const Juperverse = () => {
  return (
    <>
      <section className="jupiverse-section mb-4 my-xl-5 py-xl-5 mt-xxl-0 pt-xxl-0">
        <div className="container container-modify py-4">
          <div className="row justify-content-center   align-items-center">
            <div className="col-10 col-xl-6 order-2 order-lg-1 mt-5 mt-lg-0">
              <div className="jupiverse-text text-center text-lg-start pe-lg-1 pe-xl-2 me-lg-3 me-xl-0">
                <h2 className="para-heading mt-3 pt-1 text-white">
                  The <span className="text-brown">Jupiverse</span>
                </h2>
                <p className="para pe-xl-5 me-xl-4 text-white opacity-75">
                  The future is in the Jupiverse, not the metaverse. The
                  Jupiverse is a decentralized, yet autonomous future. Our
                  algorithm trades 24/7 365 days a year. We don’t have time to
                  take breaks in the Jupiverse. Our systems run completely
                  autonomously. We have built consistency which no human could
                  ever compete with. Other venture funds and manual traders
                  cannot rival the power of algorithms. Even better, our AI-
                  developed and machine learning algorithm gets better as time
                  goes on. Can’t wait to see you in the Jupiverse!
                </p>
              </div>
            </div>
            <div className="col-9 col-sm-6 col-xl-5 order-1 order-lg-2 mt-lg-5">
              <img className="w-100" src={juperverse} alt="juperverse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Juperverse;
