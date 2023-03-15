export type scoresType = {
  x: number;
  o: number;
  tie: number;
};

export type squareType = {
  id: number;
  value: string;
  handleClick: (id: number) => void;
  board: boardType;
};

export type boardType = string[];
