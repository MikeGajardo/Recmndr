import React from "react";

import "../../styles/quiz.css";

// images
import blues from "../../img/quizpage/blues.jpg";


export const Question9 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={blues} className="qimg" />
      </div>
      <div className="col qpage qp9 qmain">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>&nbsp;</p><p>Which animal most</p><p>closely resembles you?</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q10" className="btn btn-light answerbtn" id="unpretentious-2" role="button">Butterfly</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q10" className="btn btn-light answerbtn" id="mellow-1" role="button">Sloth</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q10" className="btn btn-light answerbtn" id="contemporary-5" role="button">Lion</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q10" className="btn btn-light answerbtn" id="sophisticated-3" role="button">Elephant</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q10" className="btn btn-light answerbtn" id="loud-4" role="button">Whale</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">9 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question9;