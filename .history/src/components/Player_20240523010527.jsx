import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //runs instantly which means noting will happen to the button value
    setIsEditing(editing=> !editing);  
  }
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" required value={name} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
    </li>
  );
}
