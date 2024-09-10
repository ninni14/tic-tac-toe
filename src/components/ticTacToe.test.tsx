import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TicTacToe from './ticTacToe';

describe('Tic-Tac-Toe Game', () => {
  test('renders the Tic-Tac-Toe header', () => {
    render(<TicTacToe />);
    expect(screen.getByText('Tic-Tac-Toe')).toBeInTheDocument();
  });

  test('renders the game board with squares', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');
    expect(squares).toHaveLength(9); // 9 squares on the board
  });

  test('displays Game Over banner with winner', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');

    // Simulate a game scenario where 'X' wins
    fireEvent.click(squares[0]); // X's move
    fireEvent.click(squares[1]); // O's move
    fireEvent.click(squares[3]); // X's move
    fireEvent.click(squares[4]); // O's move
    fireEvent.click(squares[6]); // X's move (winning move)

    // Check if Game Over banner is displayed with the winner
    const winnerBanner = screen.getByText('Winner: X');
    expect(winnerBanner).toBeInTheDocument();

    // Check if the restart button is visible
    const restartButton = screen.getByText('Restart Game');
    expect(restartButton).toBeInTheDocument();

    // Simulate clicking the restart button
    fireEvent.click(restartButton);

    // After clicking restart, the game-over banner should disappear
    expect(winnerBanner).not.toBeInTheDocument();
  });

  test('displays Game Over banner with a Tie', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');

    // Simulate a game scenario where it's a tie
    fireEvent.click(squares[0]); // X's move
    fireEvent.click(squares[1]); // O's move
    fireEvent.click(squares[2]); // X's move
    fireEvent.click(squares[4]); // O's move
    fireEvent.click(squares[3]); // X's move
    fireEvent.click(squares[5]); // O's move
    fireEvent.click(squares[7]); // X's move
    fireEvent.click(squares[6]); // O's move
    fireEvent.click(squares[8]); // X's move (final move - tie)

    // Check if Game Over banner is displayed with a tie message
    const tieBanner = screen.getByText("It's a Tie!");
    expect(tieBanner).toBeInTheDocument();

    // Check if the restart button is visible
    const restartButton = screen.getByText('Restart Game');
    expect(restartButton).toBeInTheDocument();

    // Simulate clicking the restart button
    fireEvent.click(restartButton);

    // After clicking restart, the game-over banner should disappear
    expect(tieBanner).not.toBeInTheDocument();
  });

});
