import React from "react";

import "../../styles/homepage.css";
import "../../styles/home.css";

//include images into your bundle
import culture from "../../img/homepage/culture.jpg";
import rocknroll from "../../img/homepage/rocknroll.jpg";
import turntables from "../../img/homepage/turntables.jpg";
import needle from "../../img/homepage/needle.jpg";
import saying from "../../img/homepage/saying.png";
import saying2 from "../../img/homepage/saying2.png";
import saying3 from "../../img/homepage/saying3.png";
import saying4 from "../../img/homepage/saying4.png";
import vinylhero from "../../img/homepage/vinylhero.png";
import signuptoday from "../../img/homepage/signuptoday.png";


//create your first component
const Homepage = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mx-auto carousel-fade"
        data-bs-ride="true"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={culture} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={rocknroll} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={turntables} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid d-flex mx-auto">
        <img src={needle} className="needle" id="needle" />
      </div>
      <div className="container d-flex justify-content-center contentz" id="contentz">
        <img src={saying} className="saying" id="saying" />
        <img src={saying2} className="saying2" id="saying2" />
        <img src={saying3} className="saying3" id="saying3" />
        <img src={saying4} className="saying4" id="saying4" />
      </div>
      <div className="container-fluid mx-auto">
        <a href="/signup">
        <img src={vinylhero} className="wax" id="wax" /></a>
      </div>
      <div className="container-fluid mx-auto">
        <a href="/signup">
        <img src={signuptoday} className="signup" id="signup" /></a>
      </div>
    </>
  );
};

export default Homepage;
