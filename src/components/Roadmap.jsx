import React from "react";
import BlurImg from "../assets/png/road-map-umberla-2.png";
import BlurImg2 from "../assets/png/road-map-umberla1.png";
import BlurImg3 from "../assets/png/blur-umberla.png";
import RoadmapImg1 from "../assets/png/roadmap-img1.png";
import RoadmapImg2 from "../assets/png/roadmap-img2.png";
import RoadmapImg3 from "../assets/png/roadmap-img3.png";
import RoadmapImg4 from "../assets/png/roadmap-img4.png";

const Roadmap = () => {
  return (
    <>
      <section class="roadmap-section py-4 my-5 position-relative">
        <img
          src={BlurImg}
          class="roadmap-image-right1 roadmap-bgimage position-absolute"
          alt="roadmap-image"
        />
        <img
          src={BlurImg2}
          class="roadmap-image-left roadmap-bgimage position-absolute"
          alt="roadmap-image"
        />
        <img
          src={BlurImg3}
          class="roadmap-image-right2 roadmap-bgimage position-absolute"
          alt="roadmap-image"
        />

        <div class="container container-modified py-5">
          <div class="row text-white">
            <div class="col-12">
              <h3 class="para-heading text-center">
                Road<span class="text-brown">Map</span>
              </h3>
            </div>
          </div>

          <div class="row py-sm-5 text-white">
            <div class="col-12">
              <div class="row">
                <div class="col-12 col-lg-10 col-xl-8 mx-auto my-5 road-map-col road-map-col-right position-relative">
                  <div class="position-relative d-flex justify-content-between align-items-start">
                    <div class="road-map position-relative mx-auto">
                      <img
                        src={RoadmapImg1}
                        class="mb-3 d-block mx-auto"
                        alt="roadmap-image"
                      />
                    </div>
                    <ul class="mb-0 fs-sm ps-0 roadmap-ul-right mx-auto mx-sm-0">
                      <li class="list-unstyled mb-1 fw-600 fs-xl">Phase 1</li>
                      <li class="list-unstyled my-1">
                        1000 Drops Launch on Ethereum!
                      </li>
                      <li class="list-unstyled my-1">Governance Launch!</li>
                      <li class="list-unstyled my-1">Creation of Treasury!</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-lg-10 col-xl-8 mx-auto my-5 road-map-col road-map-col-left position-relative">
                  <div class="position-relative d-flex justify-content-between align-items-start">
                    <div class="road-map position-relative mx-auto">
                      <img
                        src={RoadmapImg2}
                        class="mb-3 d-block mx-auto"
                        alt="roadmap-image"
                      />
                    </div>
                    <ul class="mb-0 fs-sm text-sm-end mb-1 ps-0 roadmap-ul-left roadmap-ul-left-2 mx-auto mx-sm-0">
                      <li class="list-unstyled my-1 fw-600 fs-xl">Phase 2</li>
                      <li class="list-unstyled my-1">Our First Airdrop!</li>
                      <li class="list-unstyled my-1">Treasury Dashboard!</li>
                      <li class="list-unstyled my-1">Major Collabs!</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-lg-10 col-xl-8 mx-auto my-5 road-map-col road-map-col-right position-relative">
                  <div class="position-relative d-flex justify-content-between align-items-start">
                    <div class="road-map position-relative mx-auto">
                      <img
                        src={RoadmapImg3}
                        class="mb-3 d-block mx-auto"
                        alt="roadmap-image"
                      />
                    </div>
                    <ul class="mb-0 fs-sm ps-0 roadmap-ul-right mx-auto mx-sm-0">
                      <li class="list-unstyled mb-1 fw-600 fs-xl">Phase 3</li>
                      <li class="list-unstyled my-1">
                        Cyber Celebs come on Ethereum!
                      </li>
                      <li class="list-unstyled my-1">More airdrops!</li>
                      <li class="list-unstyled my-1">Streetwear + Merch!</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-lg-10 col-xl-8 mx-auto my-5 road-map-col road-map-col-left position-relative">
                  <div class="position-relative d-flex justify-content-between align-items-start">
                    <div class="road-map road-map-lastcol position-relative mx-auto">
                      <img
                        src={RoadmapImg4}
                        class="mb-3 d-block mx-auto"
                        alt="roadmap-image"
                      />
                    </div>
                    <ul class="mb-0 fs-sm text-sm-end mb-1 ps-0 roadmap-ul-left mx-auto mx-sm-0">
                      <li class="list-unstyled my-1 fw-600 fs-xl">Phase 4</li>
                      <li class="list-unstyled my-1">Dashboard!</li>
                      <li class="list-unstyled my-1">Even more airdrops!</li>
                      <li class="list-unstyled my-1">
                        Enhanced Partnerships!!!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* roadmap-2 */}
          <section>
            <div className="row text-white pb-5">
              <div className="col-3">
                <div class="road-map position-relative mx-auto">
                  <img
                    src={RoadmapImg1}
                    class="mb-3 d-block mx-auto"
                    alt="roadmap-image"
                  />
                </div>
              </div>

              <div className="col-9">
                <ul class="mb-0 fs-sm ps-0 mx-auto mx-sm-0">
                  <li class="list-unstyled mb-1 fw-600 fs-xl">Phase 1</li>
                  <li class="list-unstyled my-1">
                    1000 Drops Launch on Ethereum!
                  </li>
                  <li class="list-unstyled my-1">Governance Launch!</li>
                  <li class="list-unstyled my-1">Creation of Treasury!</li>
                </ul>
              </div>
            </div>
            <div className="row text-white pb-5">
              <div className="col-3">
                <div class="road-map position-relative mx-auto">
                  <img
                    src={RoadmapImg2}
                    class="mb-3 d-block mx-auto"
                    alt="roadmap-image"
                  />
                </div>
              </div>

              <div className="col-9">
                <ul class="mb-0 fs-sm mb-1 ps-0 mx-auto mx-sm-0">
                  <li class="list-unstyled my-1 fw-600 fs-xl">Phase 2</li>
                  <li class="list-unstyled my-1">Our First Airdrop!</li>
                  <li class="list-unstyled my-1">Treasury Dashboard!</li>
                  <li class="list-unstyled my-1">Major Collabs!</li>
                </ul>
              </div>
            </div>
            <div className="row text-white pb-5">
              <div className="col-3">
                <div class="road-map position-relative mx-auto">
                  <img
                    src={RoadmapImg3}
                    class="mb-3 d-block mx-auto"
                    alt="roadmap-image"
                  />
                </div>
              </div>

              <div className="col-9">
                <ul class="mb-0 fs-sm ps-0 mx-auto mx-sm-0">
                  <li class="list-unstyled mb-1 fw-600 fs-xl">Phase 3</li>
                  <li class="list-unstyled my-1">
                    Cyber Celebs come on Ethereum!
                  </li>
                  <li class="list-unstyled my-1">More airdrops!</li>
                  <li class="list-unstyled my-1">Streetwear + Merch!</li>
                </ul>
              </div>
            </div>
            <div className="row text-white pb-5">
              <div className="col-3">
                <div class="road-map road-map-lastcol position-relative mx-auto">
                  <img
                    src={RoadmapImg4}
                    class="mb-3 d-block mx-auto"
                    alt="roadmap-image"
                  />
                </div>
              </div>

              <div className="col-9">
                <ul class="mb-0 fs-sm text-sm-end mb-1 ps-0 roadmap-ul-left mx-auto mx-sm-0">
                  <li class="list-unstyled my-1 fw-600 fs-xl">Phase 4</li>
                  <li class="list-unstyled my-1">Dashboard!</li>
                  <li class="list-unstyled my-1">Even more airdrops!</li>
                  <li class="list-unstyled my-1">Enhanced Partnerships!!!</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
