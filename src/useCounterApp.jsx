import { useState } from "react";

export const useCounterApp = (initialVal = 0) => {
  const [state, setState] = useState(initialVal);

  const incCounter = () => {
    setState((prev) => prev + 1);
  };

  const decCounter = () => {
    setState((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const resCounter = () => {
    setState(0);
  };
  return [state, incCounter, decCounter, resCounter];
};
