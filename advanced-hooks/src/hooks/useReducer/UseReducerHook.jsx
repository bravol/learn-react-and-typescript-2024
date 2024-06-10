import React, { useReducer } from "react";
import { counterReducer, fetchValue, setInitialValue } from "./counter-reducer";

export const UseReducerHook = () => {
  const [counter, dispatchCounter] = useReducer(
    counterReducer,
    0,
    setInitialValue
  );
  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        onClick={() => dispatchCounter({ type: "INCREMENT", payload: 1 })}
      >
        Increment
      </button>
      <button onClick={() => dispatchCounter({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button
        onClick={() =>
          dispatchCounter({ type: "INCREMENT_BY_ANY_NUMBER", payload: 2 })
        }
      >
        Increment By 2
      </button>
      <button
        onClick={() =>
          dispatchCounter({ type: "INCREMENT_BY_ANY_NUMBER", payload: 4 })
        }
      >
        Increment By 4
      </button>
      <button
        onClick={async () => {
          dispatchCounter({
            type: "API_SETVALUE",
            payload: await fetchValue(),
          });
        }}
      >
        Set Random value from APi
      </button>
      <button onClick={() => dispatchCounter({ type: "RESET_COUNTER" })}>
        Reset Counter
      </button>
    </div>
  );
};
