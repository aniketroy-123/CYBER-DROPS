import React from "react";
import MissionImg from "../assets/png/mission-img.png";

const Mission = () => {
  return (
    <>
      {/* <!--================================ OUR MISSION SECTION  ================================ --> */}
      <section>
        <div class="container py-5">
          <div class="row d-md-flex justify-content-between align-items-center my-xxl-3">
            <div class="col-10 col-sm-8 col-lg-5 col-xxl-4 mx-auto mx-lg-0">
              <div class="ms-lg-4 mx-xxl-0">
                <img src={MissionImg} class="w-100" alt="mission-img" />
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xxl-5 mt-5 mt-lg-0 mb-5 mb-lg-0">
              <div class="ps-xxl-4 text-center text-lg-start text-white">
                <p class="para-heading mb-0">
                  Our <span class="text-brown">Mission</span>
                </p>
                <p class="par mt-3 pt-sm-1 mb-4 mb-sm-3 mb-sm-5 pb-lg-0">
                  We understand that one of the biggest concerns for early-stage
                  investors is that it can quickly become stressful,
                  overwhelming, and especially extremely time consuming. It
                  isn’t easy to balance a full time job, family, and an active
                  investment portfolio, especially when just starting out.
                </p>
                <button class="brown-btn d-block mx-auto mx-lg-0">
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
