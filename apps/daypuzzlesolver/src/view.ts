import { BrickWithPosition, DayPuzzleSolver } from './daypuzzlesolver';
import { DisplayData } from '@htrsoft/daypuzzlesolver-models';

export function view(
  date: Date,
  rows: number,
  cols: number,
  bricksWithPosition: BrickWithPosition[]
): DisplayData {
  const viewData = new Array<string>(cols * rows);
  const monthIndex = DayPuzzleSolver.MonthIndexes[date.getMonth()];
  const dateIndex = DayPuzzleSolver.DateIndexes[date.getDate()];
  const dayIndex = DayPuzzleSolver.DayIndexes[date.getDay()];
  viewData[monthIndex] = '1';
  viewData[dateIndex] = '2';
  viewData[dayIndex] = '3';

  for (const brickWithPosition of bricksWithPosition) {
    const brickFromDirection =
      brickWithPosition.brick.directions[brickWithPosition.direction];
    for (let col = 0; col < brickFromDirection.width; col++) {
      for (let row = 0; row < brickFromDirection.height; row++) {
        if (
          brickWithPosition.row + row < rows &&
          brickWithPosition.col + col < cols
        ) {
          const pos =
            (brickWithPosition.row + row) * cols + brickWithPosition.col + col;
          if (
            brickFromDirection.data[row * brickFromDirection.width + col] !== 0
          ) {
            viewData[pos] = brickWithPosition.brick.displayCharacter;
          }
        }
      }
    }
  }
  return {
    date,
    rows,
    cols,
    viewData,
  };
}
