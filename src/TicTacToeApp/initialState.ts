import { TicTacToeAppState } from "./types";

const initialState: TicTacToeAppState = {
  board: [
    ['X','',''],
    ['','X',''],
    ['','','X']
  ],
  turn: 'X'
};

export default initialState;
