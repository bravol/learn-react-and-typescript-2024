import s from "./App.module.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className={s.root}>
      <Calculator defaultA={2} defaultB={"17.1"} defaultOperator={"+"} />
    </div>
  );
}

export default App;
