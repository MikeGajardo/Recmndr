import React from "react";

import "../../styles/quiz.css"

// images
import electronic from "../../img/quizpage/electronic.jpg";


export const Question1 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={electronic} className="qimg" />
      </div>
      <div className="col qpage qp1 qmain">
        <div className="container text-center">
          <div className="question"><p>&nbsp;</p><p>&nbsp;</p><p>You're at the bar,</p><p>what are you ordering?</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="contemporary-5" role="button">Hennessy with Coke</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="sophisticated-3" role="button">Old Fashioned with a small-batched Bourbon</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="unpretentious-2" role="button">Moonshine or Absinthe, or BOTH</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="mellow-1" role="button">Mimosa or an Aperol Spritz</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="intense-4" role="button">"I'll just take a Beer"</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">1 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question1;
