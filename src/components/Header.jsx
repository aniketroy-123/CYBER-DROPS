import React from "react";
import { useScreenFixedProvider } from "../contexts/ScreenFixedProvider";
import { useMediaQuery } from "react-responsive";
import { headerData } from "./common/data";
import logo from "../assets/images/logo.png";
import opensea from "../assets/images/opensea.png";
import discord from "../assets/images/discord.png";
import twitter from "../assets/images/twitter.png";
import m from "../assets/images/m.png";
const Header = () => {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  return (
    <>
      <section className="d-flex w-100 navbar-wrapper justify-content-between py-sm-2">
        <Desktop>
          <div className="container d-flex justify-content-between">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              {headerData.map((item, index) => (
                <span key={index}>
                  <li
                    className={`mx-3 nav-list-items p-1 d-inline-block ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <a href={`#${item.url}`}>{item.title}</a>
                  </li>
                </span>
              ))}
              <div>
                <ul className="list-unstyled d-flex align-items-center mb-0 ms-4">
                  <li>
                    <a
                      className="header-svg-hover"
                      href="http://www.opensea.com/"
                    >
                      <img src={opensea} alt="opensea" />
                    </a>
                  </li>

                  <li className="ms-3">
                    <a
                      className="header-svg-hover"
                      href="http://www.discord.com/"
                    >
                      <img src={discord} alt="discord" />
                    </a>
                  </li>

                  <li className="mx-1">
                    <a
                      className="header-svg-hover"
                      href="https://www.twitter.com/"
                    >
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>

                  <li className="me-3 pe-1">
                    <a className="header-svg-hover" href="">
                      <img src={m} alt="m" />
                    </a>
                  </li>

                  <li>
                    <button className="py-2 px-3 fs-sm br-r-8 fw-500 border-0 brown-btn">
                      Connect Wallet
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Desktop>

        {/* OVERLAY HERE  THIS CODE RUN BEFORE 992PX*/}
        <BeforeDesktop>
          <div className={`${showOverlay ? "overlay-active" : ""} overlay-nav`}>
            <div className="nav-bg-light h-screen d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column text-center ">
                <ul className="p-0">
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a className="nav-link fs-2 text-white text-decoration-none">
                        Home
                      </a>
                    </span>
                  </li>
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#story"
                        className="nav-link fs-2 text-white text-decoration-none "
                      >
                        About
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img  mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="pt-3 pt-sm-3 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#upgrader"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Team
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img  mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="pt-3 pt-sm-3 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#roadmap"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Roadmap
                      </a>
                    </span>
                  </li>

                  <li className="nav-item btn-img mt-4 mt-lg-1  transition-0_3sEase overflow-hidden d-sm-none">
                    <span
                      className="pt-3 pt-sm-3 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <ul className="list-unstyled d-flex align-items-center mb-0 mx-4 ">
                        <li>
                          <img src={opensea} alt="opensea" />
                        </li>

                        <li className="ms-3">
                          <img src={discord} alt="discord" />
                        </li>

                        <li className="mx-1">
                          <img src={twitter} alt="twitter" />
                        </li>

                        <li className="me-3 pe-1">
                          <img src={m} alt="m" />
                        </li>
                      </ul>
                    </span>
                  </li>

                  <li className="nav-item btn-img  mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <button className="brown-btn py-2 px-3 fs-sm br-r-8 fw-500 d-sm-none border-0">
                        Connect Wallet
                      </button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <nav className="navbar h-86 navbar-expand-lg navbar-light p-2 p-sm-3 w-100">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <img className="nav-logo" src={logo} alt="logo" />

              <div className="d-flex align-items-center">
                <ul className="list-unstyled d-flex align-items-center mb-0 mx-4 ">
                  <li className="d-none d-sm-block">
                    <img src={opensea} alt="opensea" />
                  </li>

                  <li className="ms-3 d-none d-sm-block">
                    <img src={discord} alt="discord" />
                  </li>

                  <li className="mx-1 d-none d-sm-block">
                    <img src={twitter} alt="twitter" />
                  </li>

                  <li className="me-3 pe-1 d-none d-sm-block">
                    <img src={m} alt="m" />
                  </li>

                  <li className="d-none d-sm-block">
                    <button className="bg-skin py-2 px-3 fs-sm br-r-8 text-white fw-500 border-0">
                      Connect Wallet
                    </button>
                  </li>
                </ul>
                <div
                  className={`${
                    showOverlay ? "animate" : ""
                  } position-relative navbarwrapper  hamburger-icon d-flex flex-column d-lg-none`}
                  onClick={() => setShowOverlay(!showOverlay)}
                >
                  <span className="first d-inline-block"></span>
                  <span className="second d-inline-block"></span>
                  <span className="third d-inline-block"></span>
                </div>
              </div>
            </div>
          </nav>
        </BeforeDesktop>
      </section>
    </>
  );
};

export default Header;
