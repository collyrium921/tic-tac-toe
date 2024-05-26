import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //runs instantly which means noting will happen to the button value
    setIsEditing(editing=> !editing);  
    // setIsEditing(editing=> !editing); 
    
    //It is scheduling the value to be updated which means 
    //it is not updated immediately, it is in line to get updated
    // setIsEditing(!editing);  
    // setIsEditing(!editing);  
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
