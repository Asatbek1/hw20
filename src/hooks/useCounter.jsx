import { useState } from "react";

function useCounter(initialState, prev, max, min) {
  const [count, setCount] = useState(initialState);

  const changeNumberInc = () => {
    if (count + prev <= max) {
      setCount(count + prev);

      return;
    }
    return alert("Maximum number");
  };
  const changeNumberDec = () => {
    if (count - prev >= min) {
      setCount(count - prev);
      return;
    }
    return alert("Minumum number");
  };

  const resetNumber = () => {
    setCount(initialState);
  };

  return { changeNumberInc, changeNumberDec, count, resetNumber };
}

export default useCounter;
