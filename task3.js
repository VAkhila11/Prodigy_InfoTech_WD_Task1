const board = document.getElementById('board');
const status = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');
let currentPlayer = 'X';
let cells = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(e) {
  const cellIndex = parseInt(e.target.dataset.index);
  if (cells[cellIndex] === '' && gameActive) {
    cells[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    if (checkWin() || checkDraw()) {
      gameActive = false;
      status.textContent = checkWin() ? `Player ${currentPlayer} wins!` : 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function checkDraw() {
  return cells.every(cell => cell !== '');
}

function resetGame() {
  cells = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = `Player ${currentPlayer}'s turn`;
  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
  });
}

board.addEventListener('click', handleCellClick);
resetBtn.addEventListener('click', resetGame);
