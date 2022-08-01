import React from "react";

import "../../styles/quiz.css";

// images
import reggae from "../../img/quizpage/reggae.jpg";


export const Question2 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={reggae} className="qimg" />
      </div>
      <div className="col qpage qp2 qmain">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>&nbsp;</p><p>If you have to pick a Film</p><p>genre, which would it be?</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q3" className="btn btn-light answerbtn" id="answerbtn" role="button">an Adventure or a Comedy flick</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q3" className="btn btn-light answerbtn" id="answerbtn2" role="button">Documentary</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q3" className="btn btn-light answerbtn" id="answerbtn2" role="button">Romance or a Musical</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q3" className="btn btn-light answerbtn" id="answerbtn2" role="button">Thriller</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q3" className="btn btn-light answerbtn" id="answerbtn2" role="button">"I don't watch TV"</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">2 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question2;