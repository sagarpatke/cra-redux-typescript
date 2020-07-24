import { TicTacToeAppState } from "./types";
import { draw } from "./actions";
import chai from 'chai';
import TicTacToeApp from ".";
import { AnyAction } from "redux";
import deepFreeze from 'deep-freeze';

const should = chai.should();

describe('Draw', () => {
  it('should draw an X', () => {

    const initialState: TicTacToeAppState = deepFreeze({
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      turn: 'X'
    });

    const action: AnyAction = draw(0,0);

    const expectedNextState: TicTacToeAppState = {
      board: [
        ['X', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      turn: 'O'
    };

    const actualNextState: TicTacToeAppState = TicTacToeApp(initialState, action);

    actualNextState.should.deep.equal(expectedNextState);
  });

    it('sholud draw an O', () => {
      
      const initialState: TicTacToeAppState = deepFreeze({
        board: [
          ['X', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        turn: 'O'
      });
  
      const action: AnyAction = draw(0,1);
  
      const expectedNextState: TicTacToeAppState = {
        board: [
          ['X', 'O', ''],
          ['', '', ''],
          ['', '', '']
        ],
        turn: 'X'
      };
  
      const actualNextState: TicTacToeAppState = TicTacToeApp(initialState, action);
  
      actualNextState.should.deep.equal(expectedNextState);
  
    });
});

export {};
