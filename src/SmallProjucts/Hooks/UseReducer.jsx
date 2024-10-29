import React, { useReducer } from "react";

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button>
        onClick=
        {() => {
          dispatch({ type: "reset" });
        }}
        Rest
      </button>
    </>
  );
};

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "descrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
