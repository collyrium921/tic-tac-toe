import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
function App() {
  const [activePlayer, setActivePlayer]=useState('X')

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=>curActivePlayer=='X'?'O':'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="O" isActive={activePlayer=='X'} />
          <Player initialName="Player2" symbol="X" isActive={activePlayer=='O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  );
}

export default App;
