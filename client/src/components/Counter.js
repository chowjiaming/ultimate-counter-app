import React, { useReducer, useEffect, useContext } from "react";
import { useFetch } from "../helpers/useFetch";
import { IncrementContext } from "../helpers/IncrementContext";

const incrementReducer = (payload, action) => {
  switch (action.type) {
    case "INCREMENT":
      return payload + action.value;
    case "DECREMENT":
      if (payload <= 0) {
        return payload;
      } else {
        return payload - action.value;
      }
    default:
      return payload;
  }
};

const Counter = () => {
  let initalCount = !JSON.parse(localStorage.getItem("count"))
    ? 0
    : JSON.parse(localStorage.getItem("count"));
  const incrementValue = useContext(IncrementContext);
  const [count, dispatch] = useReducer(incrementReducer, initalCount);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <div>Count: {count}</div>
      <button
        onClick={() => dispatch({ type: "INCREMENT", value: incrementValue })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", value: incrementValue })}
      >
        Decrement
      </button>
      <div>{loading ? "loading..." : data}</div>
    </div>
  );
};

export default Counter;
