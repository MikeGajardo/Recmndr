import React, { useState, useContext } from "react";
import { Questions } from "../QuestionBank";
import { QuizContext } from "../store/QuizContext";
import { Link, useHistory } from "react-router-dom";
import "../../styles/quiz.css";
import electronic from "../../img/quizpage/electronic.jpg";

export const Quiz = () => {
  const { gameState, setGameState, scoreCo, setScoreCo, scoreSo, setScoreSo, scoreUn, setScoreUn, scoreMe, setScoreMe, scoreIn, setScoreIn } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const history = useHistory()

  const nextQuestion = () => {
    if (Questions[currQuestion].contemporary == optionChosen) {
      setScoreCo(scoreCo + 1);
    }
    if (Questions[currQuestion].sophisticated == optionChosen) {
      setScoreSo(scoreSo + 1);
    }
    if (Questions[currQuestion].unpretentious == optionChosen) {
      setScoreUn(scoreUn + 1);
    }
    if (Questions[currQuestion].mellow == optionChosen) {
      setScoreMe(scoreMe + 1);
    }
    if (Questions[currQuestion].intense == optionChosen) {
      setScoreIn(scoreIn + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

    const finishQuiz = () => {
    if (scoreCo > scoreSo && scoreCo > scoreUn && scoreCo > scoreMe && scoreCo > scoreIn) {
      history.push('/my-profile/contemporary') 
    }
    if (scoreSo > scoreCo && scoreSo > scoreUn && scoreSo > scoreMe && scoreSo > scoreIn) {
      history.push('/my-profile/sophisticated') 
    }
    if (scoreUn > scoreSo && scoreUn > scoreCo && scoreUn > scoreMe && scoreUn > scoreIn) {
      history.push('/my-profile/unpretentious') 
    }
    if (scoreMe > scoreSo && scoreMe > scoreCo && scoreMe > scoreUn && scoreMe > scoreIn) {
      history.push('/my-profile/mellow') 
    }
    if (scoreIn > scoreSo && scoreIn > scoreCo && scoreIn > scoreUn && scoreIn > scoreMe) {
      history.push('/my-profile/intense') 
    } 
  };


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <img src={electronic} className="qimg" />
        </div>
        <div className="col qpage qp1 qmain">
          <div className="container text-center">
            <div className="question">
              <p>&nbsp;</p>
              <h1>{Questions[currQuestion].prompt}</h1>
            </div>
            <div className="d-flex justify-content-center answer">
              <button className="answerbtn" onClick={() => setOptionChosen(Questions[currQuestion].contemporary)}>
                {Questions[currQuestion].contemporary}
              </button>
            </div>
            <div className="d-flex justify-content-center answer2">
              <button className="answerbtn" onClick={() => setOptionChosen(Questions[currQuestion].sophisticated)}>
                {Questions[currQuestion].sophisticated}
              </button>
            </div>
            <div className="d-flex justify-content-center answer2">
              <button className="answerbtn" onClick={() => setOptionChosen(Questions[currQuestion].unpretentious)}>
                {Questions[currQuestion].unpretentious}
              </button>
            </div>
            <div className="d-flex justify-content-center answer2">
              <button className="answerbtn" onClick={() => setOptionChosen(Questions[currQuestion].mellow)}>
                {Questions[currQuestion].mellow}
              </button>
            </div>
            <div className="d-flex justify-content-center answer2">
              <button className="answerbtn" onClick={() => setOptionChosen(Questions[currQuestion].intense)}>
                {Questions[currQuestion].intense}
              </button>
            </div>

            {currQuestion == Questions.length - 1 ? (
              <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
              <button onClick={nextQuestion}>Next Question</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;