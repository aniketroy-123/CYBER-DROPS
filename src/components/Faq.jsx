import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./common/data";
import { UpArrowIcon } from "./common/Icons";

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
      <div className="animate-2"></div>
      <div
        className="container"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <h2 className="faq-heading ps-sm-3 text-gradient mb-lg-4">FAQ</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => activeHandler(index)}
            className={`faq-wrapper mb-sm-4 mb-2 py-2 px-0 px-md-3   ${
              index === view ? "active" : ""
            }`}
          >
            <div
              className={`faq-question text-white text-uppercase d-flex align-items-center justify-content-between pt-2 pb-3 `}
            >
              {item.question}{" "}
              <span className={`${index == view ? "rotate-icon" : ""}`}>
                <svg
                  className="rotate"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <AnimatePresence>
              {index == view ? (
                <>
                  <motion.div
                    transition={{ type: "spring", stiffness: 80 }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { type: "spring", stiffness: 70 },
                    }}
                    className={`faq-answer `}
                  >
                    <div className="mb-3">{item.answer}</div>
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
