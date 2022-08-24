import React from "react";
import Spotify from "react-spotify-embed";

import feedback from "../../img/feedback/feedback.png";

import "../../styles/feedback.css";

function Feedback() {
  return (
    <div className="container-fluid">
      <div className="d-flex mx-auto justify-content-center">
        <a href="https://forms.gle/jsT5F47mAfg4zrYH9" target="_blank">
          <img src={feedback} className="feedback" />
        </a>
      </div>
    </div>
  );
}

export default Feedback;
