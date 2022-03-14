import React from "react";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import BackToTop from "../components/common/BackToTop";
import Mission from "../components/Mission";

const Home = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Faq />
      <BackToTop />
    </>
  );
};

export default Home;
