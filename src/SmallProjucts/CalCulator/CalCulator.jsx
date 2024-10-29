import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  function Calculator() {
    let answers = eval(inputValue);
    setInputValue(answers);
  }
  function display(value) {
    setInputValue(inputValue + value);
  }
  function clear() {
    setInputValue("");
  }
  return (
    <div className="Calculator">
      <form action="" name="calc">
        <input type="text" className="value" value={inputValue} readOnly />
        <br />
        <span
          className="clear"
          onClick={() => {
            clear();
          }}
        >
          C
        </span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("7")}>7</span>
        <br />
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("3")}>3</span>
        <br />
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <br />
        <span>.</span>
        <div>
          <span className="operator" onClick={() => display("/")}>
            /
          </span>
          <span className="operator" onClick={() => display("*")}>
            *
          </span>
          <span className="operator" onClick={() => display("-")}>
            -
          </span>
          <span className="operator" onClick={() => display("+")}>
            +
          </span>
          <span className="equal" onClick={() => Calculator()}>
            =
          </span>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
