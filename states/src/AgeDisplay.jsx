import { useState } from "react";

export function AgeDisplay() {
  const [age, setAge] = useState(0);
  function increaseAge() {
    setAge(age + 1);
  }

  //   console.log(age);
  return (
    <div>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={() => setAge(age - 1)}>Decrease Age</button>
      <p style={{ color: "red" }}>I am {age} years old</p>
    </div>
  );
}
