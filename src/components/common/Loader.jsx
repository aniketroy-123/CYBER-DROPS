import React from "react";
import loader from "../../assets/images/loader.png";

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
