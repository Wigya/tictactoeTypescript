import "./Scores.css";
import { scoresType } from "../../types/types";
// TODO CHANGE SCORES TYPE
function Scores({ scores }: any) {
  // const { x, tie, o } = scores as scoresType;
  return (
    <div className="scores">
      <div>
        <span>Player</span>
        <br />
        <span>{scores.x}</span>
      </div>
      <div>
        <span>Tie</span>
        <br />
        <span>{scores.tie}</span>
      </div>
      <div>
        <span>Computer</span>
        <br />
        <span>{scores.o}</span>
      </div>
    </div>
  );
}

export default Scores;
