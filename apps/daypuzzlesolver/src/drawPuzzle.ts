export function drawPuzzle<T>(rows: number, cols: number, puzzle: T[]) {
  console.log('Next puzzle');
  let buffer = '';
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const pos = row * cols + col;
      const value = puzzle[pos];
      if (value === -1) {
        buffer += ' ';
      } else {
        buffer += value?.toString() || ' ';
      }
    }
    buffer += '\n';
  }
  console.log(buffer);
}
