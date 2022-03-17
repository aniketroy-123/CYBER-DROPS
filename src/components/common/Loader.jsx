import React from "react";
import loader from "../../assets/png/cyber-logo-img.png";

const Loader = () => {
  return (
    <>
      <div className="loader-fullscreen">
        <img className="loader-img" src={loader} alt="heroSnailImage" />
      </div>
    </>
  );
};

export default Loader;
