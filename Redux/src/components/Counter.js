import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.toggle);
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  function handleIncrement() {
    dispatch({ type: "increment" });
  }
  function handleDecrement() {
    dispatch({ type: "decrement" });
  }
  function handleIncrease() {
    dispatch({ type: "increaseBy5", amount: 10 });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
