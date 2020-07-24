import initialState from './initialState';
import { TicTacToeAppState } from './types';
import { TicTacToeAction, ActionType } from './actions';

function TicTacToeApp(currentState: TicTacToeAppState = initialState, action: TicTacToeAction): TicTacToeAppState {
  switch(action.type) {
    case ActionType.DRAW:
      const [row, col] = action.payload;
      const newRow = [...currentState.board[row].slice(0, col), currentState.turn, ...currentState.board[row].slice(col+1)];
      const board = [...currentState.board.slice(0,row), newRow,...currentState.board.slice(row+1)]
      const nextState: TicTacToeAppState = {...currentState, turn: currentState.turn === 'X' ? 'O' : 'X', board: board};

      return nextState;
    default:
      return currentState;
  }
}

export default TicTacToeApp;
