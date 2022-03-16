import React from "react";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import BackToTop from "../components/common/BackToTop";
import Mission from "../components/Mission";
import MintCards from "../components/MintCards";
import Partner from "../components/Partner";
import Onlogo from "../components/Onlogo";
import What from "../components/What";
import Juperverse from "../components/Juperverse";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Partner />
      <Onlogo />
      <What />
      <MintCards />
      <Juperverse />
      <Faq />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
