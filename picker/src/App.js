import { useState } from "react";
import DisplayDificulty from "./components/displayDificulty/DisplayDificulty";
import MenuList from "./components/menuList/MenuList";

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");

  //update current difficulkty
  const itemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Select your react difficulty</h2>
      <div className="workspace">
        <MenuList itemClick={itemClick} difficulty={currentDifficulty} />
        <DisplayDificulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
