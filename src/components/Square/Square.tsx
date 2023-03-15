import "./Square.css";
import { boardType, squareType } from "../../types/types";

// TODO CHANGE ANY TYPE
function Square({ id, value, handleClick, board }: squareType) {
  return (
    <div id={id.toString()} onClick={() => handleClick(id)} className="square">
      <p
        className={
          id.toString() === board[0] ||
          id.toString() === board[1] ||
          id.toString() === board[2]
            ? "changed"
            : ""
        }
      >
        {value}
      </p>
    </div>
  );
}

export default Square;
