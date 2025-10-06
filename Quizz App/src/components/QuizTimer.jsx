import React, { useState } from "react";
import { useEffect } from "react";

const QuizTimer = ({ timeOut, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    setTimeout(setTimeout(onTimeOut, timeOut));
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);
  return <progress id="question-time" />;
};

export default QuizTimer;
