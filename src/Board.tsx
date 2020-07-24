import React from 'react';
import { connect } from 'react-redux';
import { Board as BoardType} from './TicTacToeApp/types';
import './board.css';

export interface BoardProps {
  board: BoardType
}

const styles = {
  table: {
    border: '1px solid black'
  },
  cell: {
    border: '1px solid black',
    width: '3em',
    height: '3em',
    cursor: 'pointer'
  }
};

function Board(props: BoardProps) {
  return (
    <table style={styles.table}>
      {props.board.map(row =>
        <tr>
          {row.map(cell => 
          <td style={styles.cell} className="center" onClick={console.log}>
            {cell}
          </td>
          )}
        </tr>
       )}
    </table>
  );
}

const mapStateToProps = ({board}: {board: any}) => ({
  board
});

export default connect(mapStateToProps)(Board);
