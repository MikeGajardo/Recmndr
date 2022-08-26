import React from "react";
import disclaimer from "../../img/aboutus/disclaimer.png";
import qrcode from "../../img/aboutus/qrcode.png";
import follow from "../../img/aboutus/follow.png";
import beastie from "../../img/aboutus/beastie.jpg";
import techused from "../../img/aboutus/techused.jpg";
import crafted from "../../img/aboutus/crafted.png";
import challenges from "../../img/aboutus/challenges.png";
import future from "../../img/aboutus/future.png";
import pi from "../../img/aboutus/pi.png";
import cranium from "../../img/aboutus/cranium.png";
import alex from "../../img/aboutus/alex.png";
import mike from "../../img/aboutus/mike.png";
import alejandro from "../../img/aboutus/alejandro.png";
import spin from "../../img/aboutus/spin.gif";

import "../../styles/aboutus.css";

function Aboutus() {
  return (
    <div className="container" id="aboutustop">
      <div className="d-flex mx-auto justify-content-center">
        <img src={crafted} className="crafted" />
      </div>
      {/* accordion start */}
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header text-center" id="flush-headingOne">
            <button
              className="accordion-button collapsed btntest"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              mike
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body d-flex">
              <img src={mike} className="bios" />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              alex
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <img src={alex} className="bios" />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              alejandro
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <img src={alejandro} className="bios" />
            </div>
          </div>
        </div>
      </div>
      {/* accordion end */}
      <div className="d-flex mx-auto justify-content-center">
        <a href="#follow">
          <img src={beastie} className="beastie" />
        </a>
      </div>

      <div className="d-flex mx-auto justify-content-center">
        <a href="#tech">
          <img src={follow} className="followalong" id="follow" />
        </a>
      </div>
      <div className="d-flex mx-auto justify-content-center">
        <a
          href="https://github.com/MikeGajardo/Recmndr"
          className="qrcode"
          target="_blank"
        >
          <img src={qrcode} />
        </a>
      </div>

      <div className="d-flex mx-auto justify-content-center">
        <a href="#challenges">
          <img src={techused} className="techused" id="tech" />
        </a>
      </div>
      <div className="d-flex mx-auto justify-content-center">
          <img src={spin} className="spindoctor" id="" />
      </div>

      <div className="d-flex mx-auto justify-content-center">
        <a href="#future">
          <img src={challenges} className="challenges" id="challenges" />
        </a>
      </div>
      <div className="d-flex mx-auto justify-content-center">
        <img src={pi} className="pi" />
      </div>
      <div className="d-flex mx-auto justify-content-center">
        <a href="#disclaimer">
          <img src={future} className="future" id="future" />
        </a>
      </div>
      <div className="d-flex mx-auto justify-content-center">
        <img src={cranium} className="cranium" />
      </div>
      <div className="d-flex mx-auto justify-content-center disclaimer">
        <a href="#aboutustop">
          <img src={disclaimer} className="disclaimer" id="disclaimer" />
        </a>
      </div>
    </div>
  );
}

export default Aboutus;
