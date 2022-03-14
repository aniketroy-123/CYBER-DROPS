import React from "react";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import BackToTop from "../components/common/BackToTop";
import Mission from "../components/Mission";
import MintCards from "../components/MintCards";

const Home = () => {
  return (
    <>
      <Hero />
      <Mission />
      <MintCards />
      <Faq />
      <BackToTop />
    </>
  );
};

export default Home;
