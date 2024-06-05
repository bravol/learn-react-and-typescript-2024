import React from "react";
import { divide, multiply, substract, sum } from "../utils/math-functions";

const OPERATORS = ["+", "-", "*", "/"];
const Calculator = ({ defaultA, defaultB, defaultOperator }) => {
  const [inputA, setInputA] = React.useState(
    !defaultA || isNaN(defaultA) ? 0 : defaultA
  );
  const [inputB, setInputB] = React.useState(
    !defaultB || isNaN(defaultB) ? 0 : defaultB
  );

  const [operator, setOperator] = React.useState(
    OPERATORS.includes(defaultOperator) ? defaultOperator : "+"
  );

  const renderInputA = () => {
    return (
      <input
        type="number"
        value={inputA}
        onChange={(e) =>
          setInputA(e.target.value ? Number.parseFloat(e.target.value) : "")
        }
      />
    );
  };
  const renderInputB = () => {
    return (
      <input
        type="number"
        value={inputB}
        onChange={(e) =>
          setInputB(e.target.value ? Number.parseFloat(e.target.value) : "")
        }
      />
    );
  };

  const renderSelectBox = () => {
    return (
      <div>
        <select
          className="form-select"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
      </div>
    );
  };

  const valueA = inputA || 0;
  const valueB = inputB || 0;

  const calculate = () => {
    switch (operator) {
      case "+":
        return sum(valueA, valueB);
      case "-":
        return substract(valueA, valueB);
      case "*":
        return multiply(valueA, valueB);
      case "/":
        return divideSafely(valueA, valueB);
      default:
        return "Invalid Operator provided";
    }
  };

  function divideSafely(a, b) {
    try {
      return divide(a, b);
    } catch (error) {
      return error.message;
    }
  }
  return (
    <>
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInputA()}
      {renderSelectBox()}
      {renderInputB()}
      <h2 style={{ marginTop: 40 }}>Result</h2>
      {calculate()}
    </>
  );
};

export default Calculator;
