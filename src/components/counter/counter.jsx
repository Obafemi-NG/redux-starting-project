import classes from "./counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store/counter.slice";

const Counter = () => {
  const counterValue = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleIncrease = () => {
    dispatch(counterActions.increase(5));
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counterValue} </div>}
      <div>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
