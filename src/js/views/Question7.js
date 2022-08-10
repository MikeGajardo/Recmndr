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
        <div className="question"><p>&nbsp;</p><p>You're at a party,</p><p>what's your first</p><p>inclination?</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="unpretentious-2" role="button">Decide how the “vibe” currently affects you to decide if you’ll stay for a while</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="intense-4" role="button">Head directly to the bar, you’ve arrived one hour late and need to play catch-up </a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="mellow-1" role="button">Look for the quiet spot, you are there for the conversation </a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="answerbtn2" role="button">Catch up with friends, it’s the 3rd time you’ve seen them this week</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q8" className="btn btn-light answerbtn" id="answerbtn2" role="button">Offer and share to make the cocktail you've been perfecting</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">7 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question7;