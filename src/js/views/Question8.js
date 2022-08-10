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
        <div className="question"><p>&nbsp;</p><p>When people see your</p><p>music playlist</p><p>they say that:</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="unpretentious-2" role="button">I should move to Kansas or Kentucky</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="intense-4" role="button">That was loud.</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="contemporary-5" role="button">"What were the lyrics? I couldn't understand them"</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="sophisticated-3" role="button">"I have never heard that song before"</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q9" className="btn btn-light answerbtn" id="mellow-1" role="button">"My partner loves that song too!"</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">8 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question8;