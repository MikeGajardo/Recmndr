import React from "react";

import "../../styles/quiz.css";

// images
import electronic from "../../img/quizpage/electronic.jpg";
import jazz from "../../img/quizpage/jazz.jpg";


export const Question = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <img src={jazz} className="qimg" />
        </div>
        <div className="col qpage qp qmain">
          <div className="container text-center">
            <div className="question"><h1 className="startquest">Ready to Begin?</h1></div>
            <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q1" className="btn btn-light ansbtnstart" id="ansbtnstart" role="button"><p className="startxt" id="startxt">Start</p></a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
