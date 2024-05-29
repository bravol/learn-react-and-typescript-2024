import { useState } from "react";

export function AgeDisplay() {
  const [age, setAge] = useState(0);
  function increaseAge() {
    setAge(age + 1);
  }
  function reduceAge() {
    setAge(age - 1);
  }
  return (
    <div>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={reduceAge}>Decrease Age</button>
      <p>I am {age} years old</p>
    </div>
  );
}
