import React from "react";

import "../../styles/quiz.css";

// images
import rnb from "../../img/quizpage/rnb.jpg";


export const Question6 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={rnb} className="qimg" />
      </div>
      <div className="col qpage qp6 qmain">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>If you could be one</p><p>Superhero, which Hero</p><p>would you be?</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q7" className="btn btn-light answerbtn" id="sophisticated-3" role="button">Dr. Strange</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q7" className="btn btn-light answerbtn" id="mellow-1" role="button">Batman</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q7" className="btn btn-light answerbtn" id="intense-4" role="button">Thor</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q7" className="btn btn-light answerbtn" id="contemporary-5" role="button">Superman</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q7" className="btn btn-light answerbtn" id="unpretentious-2" role="button">Captain America</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">6 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question6;