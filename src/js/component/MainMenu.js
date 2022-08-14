import React, { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import "../../styles/quiz.css";
import jazz from "../../img/quizpage/jazz.jpg";

export const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <img src={jazz} className="qimg" />
        </div>
        <div className="col qpage qp qmain">
          <div className="container text-center">
          <div className="question">
              <h1 className="startquest">Ready to Begin?</h1>
            </div>
            <div className="d-flex justify-content-center answer">
                <button
                  className="btn btn-light ansbtnstart"
                  id="ansbtnstart"
                  role="button"
                  onClick={() => {
                    setGameState("quiz");
                  }}
                >
                  Start
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;