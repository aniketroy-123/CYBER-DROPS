import React from "react";

const MintCards = () => {
  return (
    <>
      {/* <!-- =============================== HOW IT WORKS SECTION ================================== --> */}
      <section>
        <div className="container py-4 pb-sm-5 my-sm-2 mb-xxl-0 pb-xxl-0 container-modify">
          <div className="row">
            <div
              className="col-12"
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <h2 className="para-heading text-white text-center my-2">
                How it <span className="text-brown">works</span>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center pt-md-5 py-lg-5">
            <div
              className="col-10 col-md-6 col-lg-5 col-xl-3 mt-4"
              data-aos="flip-right"
              data-aos-duration="2500"
            >
              <div className="works-cards text-white mx-auto mx-xxl-0">
                <div className="bg-black d-flex flex-column align-items-center justify-content-center">
                  <p className="bg-brown font-2xl fw-700 text-center mb-1 mb-sm-3 d-inline-block mx-auto rounded-div">
                    01
                  </p>
                  <p className="fw-700 font-lg text-center mt-1 mb-1 mb-sm-3">
                    Mint NFT
                  </p>
                  <p className="font-sm text-center px-xl-2 mb-0 mb-md-3">
                    You must own our NFT to connect to direct management or
                    participate in governance
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-md-6 col-lg-5 col-xl-3 mt-4"
              data-aos="flip-right"
              data-aos-duration="2500"
            >
              <div className="works-cards text-white mx-auto mx-xxl-0">
                <div className="bg-black d-flex flex-column align-items-center justify-content-center">
                  <p className="bg-brown font-2xl fw-700 text-center mb-1 mb-sm-3 d-inline-block mx-auto rounded-div">
                    02
                  </p>
                  <p className="fw-700 font-lg text-center mt-1 mb-1 mb-sm-3">
                    Verify NFT Ownership
                  </p>
                  <p className="font-sm text-center mb-0 mb-md-3">
                    Only Cyber Drops that are have verified are eligible to be
                    connected under direct management
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-md-6 col-lg-5 col-xl-3 mt-4"
              data-aos="flip-right"
              data-aos-duration="2500"
            >
              <div className="works-cards text-white mx-auto mx-xxl-0">
                <div className="bg-black d-flex flex-column align-items-center justify-content-center">
                  <p className="bg-brown font-2xl fw-700 text-center mb-1 mb-sm-3 d-inline-block mx-auto rounded-div">
                    03
                  </p>
                  <p className="fw-700 font-lg text-center mt-1 mb-1 mb-sm-3">
                    Link API to your account
                  </p>
                  <p className="font-sm text-center px-xl-3 mb-0 mb-md-3">
                    Only HODLers that submit their API key and secret will be
                    under direct management
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-md-6 col-lg-5 col-xl-3 mt-4"
              data-aos="flip-right"
              data-aos-duration="2500"
            >
              <div className="works-cards text-white mx-auto mx-xxl-0">
                <div className="bg-black d-flex flex-column align-items-center justify-content-center">
                  <p className="bg-brown font-2xl fw-700 text-center mb-1 mb-sm-3 d-inline-block mx-auto rounded-div">
                    04
                  </p>
                  <p className="fw-700 font-lg text-center mt-1 mb-1 mb-sm-3">
                    Passive Income for life
                  </p>
                  <p className="font-sm text-center mb-0 mb-md-3">
                    As long as your HODL your Cyber Drop, you will be connected
                    under direct management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- =============================== HOW IT WORKS SECTION ================================== --> */}
    </>
  );
};

export default MintCards;
