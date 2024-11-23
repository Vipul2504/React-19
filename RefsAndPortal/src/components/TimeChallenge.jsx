import { useRef, useState } from "react";

const TimeChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useref();

  const [timeStarted, setTimeStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const handleStart = () => {
    setTimeStarted(true);
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };
  return (
    <>
      {timeExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You lost</p>}
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleStop : handleStart}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
