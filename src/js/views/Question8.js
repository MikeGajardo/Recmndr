import React from "react";

import "../../styles/quiz.css";

// images
import punk from "../../img/quizpage/punk.jpg";


export const Question8 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={punk} className="qimg" />
      </div>
      <div className="col qpage qp8 qmain">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>How do you decide</p><p>how your next hobby</p><p>or interest will be?</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="sophisticated-3" role="button">Something practical, gain knowledge and can even be profitable one day</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 2</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 3</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 4</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 5</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">8 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question8;