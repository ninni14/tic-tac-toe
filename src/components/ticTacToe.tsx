import React, { useState } from 'react';
import { Player, SquareProps, calculateWinner } from './utils'
import './helper.css';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null); // Check if all squares are filled
  const gameOver = winner || isBoardFull;



  const handleClick = (index: number) => {
    if (board[index] || gameOver) return; // Ignore clicks if game is over or square is filled
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      
      {/* Game Over Banner */}
      {gameOver && (
        <div className="game-over-banner">
          <h2>{winner ? `Winner: ${winner}` : "It's a Tie!"}</h2>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}

      <div className="board">
        {board.map((value, index) => (
          <Square 
            key={index} 
            value={value} 
            onClick={() => handleClick(index)} 
          />
        ))}
      </div>

      {!gameOver && <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>}
    </div>
  );
};



const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};


export default TicTacToe;
