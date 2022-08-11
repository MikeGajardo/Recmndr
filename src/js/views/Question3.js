import React from "react";

import "../../styles/quiz.css";

// images
import folk from "../../img/quizpage/folk.jpg";


export const Question3 = () => {
  return (
<div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={folk} className="qimg" />
      </div>
      <div className="col qpage qp3 qmain">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>You're on vacations on a</p><p>location you've never been</p><p>before, what are you MOST</p><p>excited for?</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q4" className="btn btn-light answerbtn" id="contemporary-5" role="button">Sight-seeing, taking pictures for the 'gram - "Pics or didn't happen"</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q4" className="btn btn-light answerbtn" id="unpretentious-2" role="button">Learning about the History/Culture</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q4" className="btn btn-light answerbtn" id="intense-4" role="button">Fiding the Hot Spots: Checking out the Night-Life</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q4" className="btn btn-light answerbtn" id="sophisticated-3" role="button">Culinary Scene - local eateries and fine dining</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q4" className="btn btn-light answerbtn" id="mellow-1" role="button">RELAXING, spas and being pampered</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">3 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question3;