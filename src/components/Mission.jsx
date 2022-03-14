import React from "react";
import MissionImg from "../assets/png/mission-img.png";

const Mission = () => {
  return (
    <>
      {/* <!--================================ OUR MISSION SECTION  ================================ --> */}
      <section>
        <div className="container py-5">
          <div className="row d-md-flex justify-content-between align-items-center my-xxl-3">
            <div className="col-10 col-sm-8 col-lg-5 col-xxl-4 mx-auto mx-lg-0">
              <div className="ms-lg-4 mx-xxl-0">
                <img src={MissionImg} className="w-100" alt="mission-img" />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-5 mt-5 mt-lg-0 mb-5 mb-lg-0">
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
      </section>
      {/* <!--================================ OUR MISSION SECTION  ================================ --> */}
    </>
  );
};

export default Mission;
