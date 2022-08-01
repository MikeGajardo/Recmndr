import React from "react";


// use style below to work on the cloud
// import "src/styles/quiz.css"
import "/Users/alex/Documents/Code/Recmndr/Recmndr/src/styles/quiz.css";

// images
import reggae from "../../img/quizpage/reggae.jpg";


export const Question2 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={reggae} className="qimg" />
      </div>
      <div className="col qpage qp2 qmain">
        <div className="container text-center">
          <div className="question"><h1>Question 2</h1></div>
          <div className="d-flex justify-content-center answer"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="answerbtn" role="button">Answer 1</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 2</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 3</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 4</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/create-your-profile/q2" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 5</a></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question2;