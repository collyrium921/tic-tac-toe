export default function Player({name, symbol}){
    return(
        <li>
            <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li>
    )
}