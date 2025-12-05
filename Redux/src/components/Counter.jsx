import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../store/counter-slice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  function handleIncrement() {
    dispatch(counterAction.increment());
  }
  function handleDecrement() {
    dispatch(counterAction.decrement());
  }
  function handleIncrease() {
    dispatch(counterAction.increase(10));
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
