import React from "react";

import "../../styles/quiz.css";

// images
import latin from "../../img/quizpage/latin.jpg";


export const Question4 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={latin} className="qimg" />
      </div>
      <div className="col qpage qp4 qmain">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>Aside from popular</p><p>Sports, which Sport would</p><p>you be MOST inclined</p><p>to try out?</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q5" className="btn btn-light answerbtn" id="unpretentious-2" role="button">Hiking</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q5" className="btn btn-light answerbtn" id="intense-4" role="button">Racing</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q5" className="btn btn-light answerbtn" id="mellow-1" role="button">Yoga</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q5" className="btn btn-light answerbtn" id="sophisticated-3" role="button">Golf</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q5" className="btn btn-light answerbtn" id="contemporary-5" role="button">Boxing</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">4 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question4;