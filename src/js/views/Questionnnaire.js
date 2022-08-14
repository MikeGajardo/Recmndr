import React, { useState } from "react";
import MainMenu from "../component/MainMenu";
import Quiz from "../component/Quiz";
import { QuizContext } from "../store/QuizContext";
import "../../styles/quiz.css";


export const Questionnaire = () => {
  const [gameState, setGameState] = useState("menu");
  const [scoreCo, setScoreCo] = useState(0);
  const [scoreSo, setScoreSo] = useState(0);
  const [scoreUn, setScoreUn] = useState(0);
  const [scoreMe, setScoreMe] = useState(0);
  const [scoreIn, setScoreIn] = useState(0);
  return (
    <div>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          scoreCo,
          setScoreCo,
          scoreSo,
          setScoreSo,
          scoreUn,
          setScoreUn,
          scoreMe,
          setScoreMe,
          scoreIn,
          setScoreIn,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
      </QuizContext.Provider>
    </div>
  );
};
export default Questionnaire;