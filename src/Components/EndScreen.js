import React, { useContext } from "react";
import { QuizContext  } from "../Helpers/Contexts";

import "../App.css"
import { Questions } from "../Helpers/QuestionBank";

function EndScreen() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };

    /* const zeroScore = () => {
        let score = document.getElementById("finalScore");
        score.classList.add("zero-score");
    }

    const notZeroScore = () => {
        let score = document.getElementById("finalScore");
        score.classList.remove("zero-score");
    } */

    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3 id="finalScore"> {score} / {Questions.length} </h3> 
            {/* {score == 0 ? zeroScore() : notZeroScore() } */}
            <button className="btn" onClick={restartQuiz}> Restart Quiz </button>
        </div>
    )
}

export default EndScreen;