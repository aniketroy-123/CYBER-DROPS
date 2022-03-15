import React from "react";
import playbit from "../assets/images/playbit.png";
import partnersecond from "../assets/images/partnersecond.png";
const Partner = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center font-4xl fw-600 text-white">
              Part<span className="text-brown ">ners</span>
            </h2>
          </div>
        </div>
      </div>
      <section className="partner py-5">
        <div className="container py-5 container-modify">
          <div className="py-5 d-flex">
            <div className=" py-5">
              <div className="py-2 playbit text-center">
                <img className="w-100 px-4 py-2" src={playbit} alt="playbit" />
              </div>
              <h6 className="font-md text-center mt-4 mb-0 fw-600">Playbit</h6>
            </div>

            <div className=" py-5 mx-5">
              <div className="py-2 capital text-center">
                <img
                  className="w-100 px-4 py-2"
                  src={partnersecond}
                  alt="partnersecond"
                />
              </div>
              <h6 className="font-md text-center mt-4 mb-0 fw-600">Playbit</h6>
            </div>

            <div className=" py-5">
              <div className="py-2 playbit text-center">
                <img className="w-100 px-4 py-2" src={playbit} alt="playbit" />
              </div>
              <h6 className="font-md text-center mt-4 mb-0 fw-600">Playbit</h6>
            </div>

            <div className=" py-5">
              <div className="py-2 playbit text-center">
                <img className="w-100 px-4 py-2" src={playbit} alt="playbit" />
              </div>
              <h6 className="font-md text-center mt-4 mb-0 fw-600">Playbit</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
