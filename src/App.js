import './App.css';
import React, {useState} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>Quiz App</h1>

      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "menu" && <EndScreen />}
    </div>
  );
}

export default App;
