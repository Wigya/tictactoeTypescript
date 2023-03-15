import "./Scores.css";
import { scoresType } from "../../types/types";

function Scores({ scores }: any) {
  const { x, tie, o } = scores as scoresType;
  return (
    <div className="scores">
      <div>
        <span>Player</span>
        <br />
        <span>{x}</span>
      </div>
      <div>
        <span>Tie</span>
        <br />
        <span>{tie}</span>
      </div>
      <div>
        <span>Computer</span>
        <br />
        <span>{o}</span>
      </div>
    </div>
  );
}

export default Scores;
