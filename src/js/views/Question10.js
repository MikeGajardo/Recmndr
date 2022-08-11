import React from "react";

import "../../styles/quiz.css";

// images
import hiphop from "../../img/quizpage/hiphop.jpg";


export const Question10 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={hiphop} className="qimg" />
      </div>
      <div className="col qpage qten qmain" id="qten">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>&nbsp;</p><p>When listening to music</p><p>what do you enjoy the</p><p>most in a song?</p></div>
          <div className="d-flex justify-content-center answer"><a href="/my-profile" className="btn btn-light answerbtn" id="contemporary-5" role="button">The beat. Music that makes me move!</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/my-profile" className="btn btn-light answerbtn" id="mellow-1" role="button">The lyrics. Lyrics above Beat always!</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/my-profile" className="btn btn-light answerbtn" id="sophisticated-3" role="button">The instrumentation. Intense listening, high level of concentration.</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/my-profile" className="btn btn-light answerbtn" id="unpretentious-2" role="button">The way the song makes me feel. I want to get lost in the music.</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/my-profile" className="btn btn-light answerbtn" id="intense-4" role="button">The energy. The adrenaline I get from songs that hype me up!</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">10 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question10;