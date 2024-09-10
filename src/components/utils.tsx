

type Player = 'X' | 'O' | null;

type SquareProps = {
    value: Player;
    onClick: () => void;
  };

// Helper function to check for a winner
function calculateWinner(board: Player[]): Player | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

export { calculateWinner };
export type { Player, SquareProps };
  