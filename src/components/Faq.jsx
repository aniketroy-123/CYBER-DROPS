import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./common/data";
import faqside from "../assets/images/faqside.png";
import faqrightblure from "../assets/images/faqrightblure.png";

const Faq = () => {
  const [view, setView] = React.useState(null);
  const activeHandler = (value) => {
    console.log(value);
    if (value === view) {
      setView(null);
    } else {
      setView(value);
    }
  };

  return (
    <section className="py-sm-5 pt-5 pb-0 position-relative" id="faq">
      <div className="position-absolute faqleft-image">
        <img className="w-100" src={faqside} alt="faqside" />
      </div>
      <div className="position-absolute faqrightblure">
        <img className="w-100" src={faqrightblure} alt="faqrightblure" />
      </div>
      <div className="animate-2"></div>
      <div
        className="container container-modify"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <h2 className="faq-heading ps-sm-3 text-gradient mb-5 pb-2 text-white text-center font-4xl">
          <span className="text-brown">FAQ</span> ’s
        </h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => activeHandler(index)}
            className={`faq-wrapper mb-4 py-2 px-3 px-md-5 cursor-pointer  ${
              index === view ? "active" : ""
            }`}
          >
            <div
              className={`faq-question fs-lg text-white text-uppercase d-flex align-items-center justify-content-between py-3 `}
            >
              {item.question}{" "}
              <span
                className={` ps-2 ps-lg-0 ${
                  index === view ? "rotate-icon" : ""
                } transition_03sEase`}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="12.5"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 12.5 12.5)"
                    fill="white"
                  />
                  <path
                    d="M18.4029 9.39793C18.2935 9.28061 18.1637 9.18753 18.0207 9.12403C17.8778 9.06052 17.7245 9.02783 17.5698 9.02783C17.415 9.02783 17.2618 9.06052 17.1188 9.12403C16.9759 9.18753 16.846 9.28061 16.7367 9.39793L12.1517 14.3082L7.56681 9.39793C7.34586 9.1613 7.04619 9.02837 6.73372 9.02837C6.42125 9.02837 6.12158 9.1613 5.90063 9.39793C5.67968 9.63455 5.55556 9.95548 5.55556 10.2901C5.55556 10.6248 5.67968 10.9457 5.90063 11.1823L11.3246 16.9911C11.4339 17.1084 11.5637 17.2015 11.7067 17.265C11.8497 17.3285 12.0029 17.3612 12.1577 17.3612C12.3124 17.3612 12.4657 17.3285 12.6086 17.265C12.7516 17.2015 12.8814 17.1084 12.9907 16.9911L18.4147 11.1823C18.8637 10.7014 18.8637 9.89148 18.4029 9.39793Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <AnimatePresence>
              {index == view ? (
                <>
                  <motion.div
                    transition={{ type: "none", stiffness: 80 }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { type: "none", stiffness: 80 },
                    }}
                    className={`faq-answer text-white fs-sm`}
                  >
                    <p className="mb-0 pb-3 mw-w-635">{item.answer}</p>
                  </motion.div>
                </>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
