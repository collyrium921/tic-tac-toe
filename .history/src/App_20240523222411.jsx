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
        <ol id="players">
          <Player initialName="Player1" symbol="O" />
          <Player initialName="Player2" symbol="X" />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  );
}

export default App;
