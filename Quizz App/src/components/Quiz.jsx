import { useState } from "react";
import QUESTIONS from "../questions";
import QuizImg from "../assets/quiz-logo.png";

export const Quiz = () => {
  const [userAnswer, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  const quizIsComplete = activeQuestionIndex.length == QUESTIONS.length;

  const handleSelectedAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  };

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={QuizImg} />
        <h2>Quiz is Completed</h2>
      </div>
    );
  }
  const shuffleAnswer = [QUESTIONS[activeQuestionIndex].answers];

  shuffleAnswer.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswer.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectedAnswer(answer)}>
                  {answer}
                  console.log(render);
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
