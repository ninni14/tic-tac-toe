import React from 'react';
import { render, screen } from '@testing-library/react';
import TicTacToe from './components/ticTacToe';

test('renders learn react link', () => {
  render(<TicTacToe />);
  const element = screen.getByText('Tic-Tac-Toe');
  expect(element).toBeInTheDocument();
});
