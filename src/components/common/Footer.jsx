import React from "react";
import fotterumbrela from "../../assets/images/fotterumbrela.png";
import opensea from "../../assets/images/opensea.png";
import discord from "../../assets/images/discord.png";
import twitter from "../../assets/images/twitter.png";
import footerleft from "../../assets/images/footerleft.png";
import faqrightblure from "../../assets/images/faqrightblure.png";
const Footer = () => {
  return (
    <>
      <section className="pt-5 mt-xl-5 position-relative">
        <div className="position-absolute fotter-left">
          <img className="w-100" src={footerleft} alt="footerleft" />
        </div>
        <div className="position-absolute fotter-right d-none d-sm-block">
          <img className="w-100" src={faqrightblure} alt="footerleft" />
        </div>
        <div className="container container-modified ">
          <div className="row">
            <div className="col-6 col-sm-5 col-md-3 col-xxl-2 mx-auto">
              <a href="#">
                <img
                  className="w-100"
                  src={fotterumbrela}
                  alt="fotterumbrela"
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-11 col-md-9 col-lg-7 col-xl-6 col-xxl-5 px-sm-4 mx-auto  ">
              <h5 className="text-brown fs-3xl text-center">Cyber Drops</h5>
              <p className="para text-center mb-3 text-white">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet.
              </p>
              <div>
                <ul className="list-unstyled d-flex align-items-center justify-content-center">
                  <li>
                    <a href="http://www.opensea.com/" target="_blank">
                      <img src={opensea} alt="opensea" />
                    </a>
                  </li>
                  <li className="ms-2 ps-1">
                    <a href="https://www.discord.com/" target="_blank">
                      <img src={discord} alt="discord" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank" s>
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3 pb-5 border-top">
          <p className="text-center mb-0 font-sm fw-400 text-white opacity-50">
            Copyright By 2022
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
