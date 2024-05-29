import { Greetings } from "./Greetings";

export function App() {
  return (
    <div>
      <input type="checkbox" onChange={() => alert("Hello")} checked />
      <p>Hi</p>
      <Greetings firstName={"John"}>Brian</Greetings>
    </div>
  );
}
