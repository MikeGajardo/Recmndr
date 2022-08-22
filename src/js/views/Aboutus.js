import React from "react";
import disclaimer from "../../img/aboutus/disclaimer.png";
import qrcode from "../../img/aboutus/qrcode.png";
import follow from "../../img/aboutus/follow.png";
import about from "../../img/aboutus/about.png";
import beastie from "../../img/aboutus/beastie.jpg";
import crafted from "../../img/aboutus/crafted.png";
import challenges from "../../img/aboutus/challenges.png";
import future from "../../img/aboutus/future.png";
import pi from "../../img/aboutus/pi.png";
import cranium from "../../img/aboutus/cranium.png";

import "../../styles/aboutus.css";

function Aboutus() {
  return (
    <div className="container">
      <div className="d-flex mx-auto justify-content-center disclaimer">
        <a href="#follow">
          <img src={disclaimer} className="disclaimer" />
        </a>
      </div>
      <div className="d-flex mx-auto justify-content-center">
        <a href="#boutus">
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
          <img src={about} className="boutus" id="boutus" />
        </a>
      </div>
      <div className="d-flex mx-auto justify-content-center">
        <img src={crafted} className="crafted" />
      </div>
      <div className="d-flex mx-auto justify-content-center">
        <img src={beastie} className="beastie" />
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
        <img src={future} className="future" id="future" />
      </div>
      <div className="d-flex mx-auto justify-content-center">
        <a href="/">
          <img src={cranium} className="cranium" />
        </a>
      </div>
    </div>
  );
}

export default Aboutus;
