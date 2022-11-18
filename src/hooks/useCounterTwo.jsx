import  { useState } from "react";

const useCounterTwo = (defaultValue, currentState, max, min) => {
  console.log(defaultValue);
  const [state, setState] = useState(defaultValue);
  function changeInc() {
    if (state + currentState <= max) {
      setState(state + currentState);

      return;
    }
    return alert("Maximum number");
  }

  function changeDec() {
    if (state - currentState >= min) {
      setState(state - currentState);
      return;
    }
    return alert("Minumum number");
  }
  function reset() {
    setState(defaultValue);
  }

  return {
    changeInc,
    changeDec,
    state,
    reset,
  };
};

export default useCounterTwo;
