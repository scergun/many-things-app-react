import { useContext, useEffect } from "react";
import { AppContext } from "./App.jsx";
import { useCounterApp } from "./useCounterApp";
import "./Counter.css";

export const Counter = () => {
  const [count, incCounter, decCounter, resCounter] = useCounterApp();
  const { setCurrentLink } = useContext(AppContext);
  useEffect(() => {
    setCurrentLink(3);
  });
  return (
    <div className="counter-container">
      <h1>CounterApp</h1>
      <p>{count}</p>
      <div className="btns">
        <button onClick={incCounter}>Increase</button>
        <button onClick={decCounter}>Decrease</button>
        <button onClick={resCounter}>Reset</button>
      </div>
    </div>
  );
};
