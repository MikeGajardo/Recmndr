import React from "react";

import "../../styles/quiz.css";

// images
import pop from "../../img/quizpage/pop.jpg";


export const Question7 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={pop} className="qimg" />
      </div>
      <div className="col qpage qp7 qmain">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>&nbsp;</p><p>You're at the bar,</p><p>what are you ordering?</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="answerbtn" role="button">Answer 1</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 2</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 3</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 4</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 5</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">7 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question7;