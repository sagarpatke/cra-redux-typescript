import { action } from 'typesafe-actions';
import { AnyAction } from 'redux';
import { Reducer, ReducerAction } from 'react';

export enum ActionType {
  DRAW = '@@custom/DRAW'
}

export type index = 0 | 1 | 2;

export const draw = (row: index, col: index) => action(ActionType.DRAW, [row, col]);

export interface TicTacToeAction extends AnyAction {
  type: ActionType
}
