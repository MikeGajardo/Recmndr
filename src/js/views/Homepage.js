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
import wax1 from "../../img/homepage/wax1.png";
import wax2 from "../../img/homepage/wax2.png";
import label from "../../img/homepage/label.png";
import speaker from "../../img/homepage/speaker.png";


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
        <a href="#wax"><img src={saying} className="saying float" id="saying" /></a>
        <a href="#wax"><img src={saying2} className="saying2 float" id="saying2" /></a>
        <a href="#wax"><img src={saying3} className="saying3 float" id="saying3" /></a>
        <a href="#wax"><img src={saying4} className="saying4 float" id="saying4" /></a>
      </div>
      <div className="container-fluid mx-auto">
        <a href="#spinners">
        <img src={vinylhero} className="wax" id="wax" /></a>
      </div>
      
      <div className="container-fluid mx-auto justify-content-center" id="spinners">
        <a href="#signup"><div className="d-flex mx-auto justify-content-center"><img src={wax1} className="spinning1"></img>
        <img src={wax2} className="spinning2"></img></div></a>
        
      </div>

      <div className="container-fluid d-flex mx-auto justify-content-center bckgrnd" id="signup">
        <div className="row">
          <div className="col-4"><a href="/Signup"><img src={speaker} className="speaker"></img></a></div>
          <div className="col-4"><img src={label} className="label"></img></div>
          <div className="col-4"><a href="/Signup"><img src={speaker} className="speaker"></img></a></div>
        </div>
      </div>

    </>
  );
};

export default Homepage;
