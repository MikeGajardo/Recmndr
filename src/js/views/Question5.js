import React from "react";

import "../../styles/quiz.css";

// images
import rock from "../../img/quizpage/rock.jpg";


export const Question5 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={rock} className="qimg" />
      </div>
      <div className="col qpage qp5 qmain">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>&nbsp;</p><p>Choose a color.</p>&nbsp;<p></p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q6" className="btn btn-light answerbtn" id="sophisticated-3" role="button">Purple</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q6" className="btn btn-light answerbtn" id="mellow-1" role="button">Yellow</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q6" className="btn btn-light answerbtn" id="intense-4" role="button">Red</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q6" className="btn btn-light answerbtn" id="unpretentious-2" role="button">Green</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q6" className="btn btn-light answerbtn" id="contemporary-5" role="button">Blue</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">5 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question5;