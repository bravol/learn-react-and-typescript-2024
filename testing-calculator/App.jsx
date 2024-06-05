import { Calculator } from "components/Calculator/Calculator";
import s from "./App.module.css";

export function App() {
  return (
    <div className={s.root}>
      <Calculator />
    </div>
  );
}
