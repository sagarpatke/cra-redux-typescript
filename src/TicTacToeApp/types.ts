export type Col = 'X' | 'O' | '';
export type Row = readonly [Col, Col, Col]
export type Board = readonly [Row, Row, Row]

export interface TicTacToeAppState {
  readonly board: Board
  readonly turn: 'X' | 'O'
}
