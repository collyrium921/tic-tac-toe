import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);  
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //runs instantly which means noting will happen to the button value
    setIsEditing(editing=> !editing);  
  }
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{initialName}</span>
        ) : (
          <input type="text" required value={initialName} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
    </li>
  );
}
