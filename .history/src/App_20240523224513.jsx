import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
function App() {
  const [gameTurns, setGameTurns]=useState([]);
  const [activePlayer, setActivePlayer]=useState('X')

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer)=>curActivePlayer=='X'?'O':'X')
    setGameTurns(prevTurns=>{
      let currentPlayer = 'X'
      if(prevTurns.length>0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O'
      }
      const updateTurns = [{square:{row:rowIndex, col:colIndex}, player:activePlayer},...prevTurns];
      return updateTurns
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="O" isActive={activePlayer=='X'} />
          <Player initialName="Player2" symbol="X" isActive={activePlayer=='O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />

    </main>
  );
}

export default App;
