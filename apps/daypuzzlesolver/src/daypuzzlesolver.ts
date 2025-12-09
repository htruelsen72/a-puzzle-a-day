class BrickData {
  constructor(
    public readonly width: number,
    public readonly height: number,
    public readonly data: Array<number>
  ) {}
}

export class Brick {
  constructor(
    public readonly displayCharacter: string,
    public readonly directions: Array<BrickData>
  ) {}
}

export class BrickWithPosition {
  constructor(
    public row: number,
    public col: number,
    public direction: number,
    public readonly brick: Brick
  ) {}
}

const b1 = new Brick('A', [
  new BrickData(3, 2, [1, 1, 1, 0, 1, 1]),
  new BrickData(2, 3, [0, 1, 1, 1, 1, 1]),
  new BrickData(3, 2, [1, 1, 0, 1, 1, 1]),
  new BrickData(2, 3, [1, 1, 1, 1, 1, 0]),
  new BrickData(3, 2, [0, 1, 1, 1, 1, 1]),
  new BrickData(2, 3, [1, 0, 1, 1, 1, 1]),
  new BrickData(3, 2, [1, 1, 1, 1, 1, 0]),
  new BrickData(2, 3, [1, 1, 1, 1, 0, 1]),
]);

const b2 = new Brick('B', [
  new BrickData(4, 1, [1, 1, 1, 1]),
  new BrickData(1, 4, [1, 1, 1, 1]),
]);

const b3 = new Brick('C', [
  new BrickData(3, 3, [1, 1, 1, 1, 0, 0, 1, 0, 0]),
  new BrickData(3, 3, [1, 1, 1, 0, 0, 1, 0, 0, 1]),
  new BrickData(3, 3, [0, 0, 1, 0, 0, 1, 1, 1, 1]),
  new BrickData(3, 3, [1, 0, 0, 1, 0, 0, 1, 1, 1]),
]);

const b4 = new Brick('D', [
  new BrickData(2, 3, [1, 1, 1, 0, 1, 0]),
  new BrickData(3, 2, [1, 1, 1, 0, 0, 1]),
  new BrickData(2, 3, [0, 1, 0, 1, 1, 1]),
  new BrickData(3, 2, [1, 0, 0, 1, 1, 1]),
  new BrickData(2, 3, [1, 1, 0, 1, 0, 1]),
  new BrickData(3, 2, [0, 0, 1, 1, 1, 1]),
  new BrickData(2, 3, [1, 0, 1, 0, 1, 1]),
  new BrickData(3, 2, [1, 1, 1, 1, 0, 0]),
]);

const b5 = new Brick('E', [
  new BrickData(4, 2, [1, 1, 1, 1, 0, 0, 0, 1]),
  new BrickData(2, 4, [0, 1, 0, 1, 0, 1, 1, 1]),
  new BrickData(4, 2, [1, 0, 0, 0, 1, 1, 1, 1]),
  new BrickData(2, 4, [1, 1, 1, 0, 1, 0, 1, 0]),
  new BrickData(4, 2, [0, 0, 0, 1, 1, 1, 1, 1]),
  new BrickData(2, 4, [1, 0, 1, 0, 1, 0, 1, 1]),
  new BrickData(4, 2, [1, 1, 1, 1, 1, 0, 0, 0]),
  new BrickData(2, 4, [1, 0, 0, 1, 0, 1, 0, 1]),
]);

const b6 = new Brick('F', [
  new BrickData(3, 3, [1, 1, 1, 0, 1, 0, 0, 1, 0]),
  new BrickData(3, 3, [0, 0, 1, 1, 1, 1, 0, 0, 1]),
  new BrickData(3, 3, [0, 1, 0, 0, 1, 0, 1, 1, 1]),
  new BrickData(3, 3, [1, 0, 0, 1, 1, 1, 1, 0, 0]),
]);

const b7 = new Brick('G', [
  new BrickData(4, 2, [1, 1, 1, 0, 0, 0, 1, 1]),
  new BrickData(2, 4, [0, 1, 0, 1, 1, 1, 1, 0]),
  new BrickData(4, 2, [1, 1, 0, 0, 0, 1, 1, 1]),
  new BrickData(2, 4, [0, 1, 1, 1, 1, 0, 1, 0]),
  new BrickData(4, 2, [0, 0, 1, 1, 1, 1, 1, 0]),
  new BrickData(2, 4, [1, 0, 1, 0, 1, 1, 0, 1]),
  new BrickData(4, 2, [0, 1, 1, 1, 1, 1, 0, 0]),
  new BrickData(2, 4, [1, 0, 1, 1, 0, 1, 0, 1]),
]);

const b8 = new Brick('H', [
  new BrickData(3, 3, [0, 0, 1, 1, 1, 1, 1, 0, 0]),
  new BrickData(3, 3, [1, 1, 0, 0, 1, 0, 0, 1, 1]),
  new BrickData(3, 3, [0, 1, 1, 0, 1, 0, 1, 1, 0]),
  new BrickData(3, 3, [1, 0, 0, 1, 1, 1, 0, 0, 1]),
]);

const b9 = new Brick('I', [
  new BrickData(3, 2, [0, 1, 1, 1, 1, 0]),
  new BrickData(2, 3, [1, 0, 1, 1, 0, 1]),
  new BrickData(3, 2, [1, 1, 0, 0, 1, 1]),
  new BrickData(2, 3, [0, 1, 1, 1, 1, 0]),
]);

const b10 = new Brick('J', [
  new BrickData(3, 2, [1, 1, 1, 1, 0, 1]),
  new BrickData(2, 3, [1, 1, 0, 1, 1, 1]),
  new BrickData(3, 2, [1, 0, 1, 1, 1, 1]),
  new BrickData(2, 3, [1, 1, 1, 0, 1, 1]),
]);

function shuffle(array) {
  let currentIndex = array.length;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export class DayPuzzleSolver {
  static MonthIndexes = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];
  static DateIndexes = Array.from({ length: 31 }, (value, index) => index + 13);
  static DayIndexes = [55, 45, 46, 47, 48, 53, 54];

  rows = 8;
  cols = 7;
  initialPuzzle = new Array<number>(this.rows * this.cols);

  bricks = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];
  // bricks = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];

  constructor() {
    for (let i = 0; i < this.rows * this.cols; i++) {
      this.initialPuzzle[i] = 0;
    }
    this.initialPuzzle[6] = 1;
    this.initialPuzzle[13] = 1;
    this.initialPuzzle[(this.rows - 1) * this.cols] = 1;
    this.initialPuzzle[(this.rows - 1) * this.cols + 1] = 1;
    this.initialPuzzle[(this.rows - 1) * this.cols + 2] = 1;
    this.initialPuzzle[(this.rows - 1) * this.cols + 3] = 1;
    shuffle(this.bricks);
  }

  solve(date: Date): BrickWithPosition[] | null {
    const monthIndex = DayPuzzleSolver.MonthIndexes[date.getMonth()];
    const dateIndex = DayPuzzleSolver.DateIndexes[date.getDate()];
    const dayIndex = DayPuzzleSolver.DayIndexes[date.getDay()];
    this.initialPuzzle[monthIndex] = 1;
    this.initialPuzzle[dateIndex] = 1;
    this.initialPuzzle[dayIndex] = 1;
    const currentPuzzle = new Array(...this.initialPuzzle);
    const currentBrick = 0;
    return this.addBrick(currentPuzzle, this.bricks, currentBrick);
  }

  private addBrick(
    puzzle: Array<number>,
    bricks: Brick[],
    currentBrickIndex: number
  ): BrickWithPosition[] | null {
    const currentBrick = bricks[currentBrickIndex];
    let row = 0;
    let col = 0;
    let direction = 0;
    let match: BrickWithPosition[] | null = null;
    while (match == null) {
      // console.log(`Trying ${currentBrickIndex}, ${row}, ${col}, ${direction}`);
      if (this.canPlaceBrick(puzzle, currentBrick, row, col, direction)) {
        const currentPuzzle = new Array(...puzzle);
        this.placeBrick(currentPuzzle, currentBrick, row, col, direction);
        if (currentBrickIndex === bricks.length - 1)
          return [new BrickWithPosition(row, col, direction, currentBrick)];
        match = this.addBrick(currentPuzzle, bricks, currentBrickIndex + 1);
        if (match) {
          match.push(new BrickWithPosition(row, col, direction, currentBrick));
          return match;
        }
      }
      if (direction < currentBrick.directions.length - 1) {
        direction++;
      } else if (col < this.cols - 1) {
        col++;
        direction = 0;
      } else if (row < this.rows - 1) {
        col = 0;
        row++;
        direction = 0;
      } else {
        // console.log(`Failing ${currentBrickIndex}, ${row}, ${col}, ${direction}`);
        return null;
      }
    }
    return match;
  }

  private canPlaceBrick(
    puzzle: Array<number>,
    currentBrick: Brick,
    row: number,
    col: number,
    direction: number
  ): boolean {
    const currentDirection = currentBrick.directions[direction];
    for (let itemRow = 0; itemRow < currentDirection.height; itemRow++) {
      for (let itemCol = 0; itemCol < currentDirection.width; itemCol++) {
        if (row + itemRow >= this.rows) return false;
        if (col + itemCol >= this.cols) return false;
        const puzzlePos = (row + itemRow) * this.cols + col + itemCol;
        const itemPos = itemRow * currentDirection.width + itemCol;
        if (puzzle[puzzlePos] + currentDirection.data[itemPos] > 1) {
          return false;
        }
      }
    }
    const tmpPuzzle = new Array(...puzzle);
    this.placeBrick(tmpPuzzle, currentBrick, row, col, direction);
    const emptyWithoutNeighbours = tmpPuzzle.some((value, index) => {
      if (value === 1) return false;
      if (value > 1) return true;
      return this.numberOfEmptyNeighbours(index, tmpPuzzle);
    });
    return !emptyWithoutNeighbours;
  }

  private numberOfEmptyNeighbours(index: number, tmpPuzzle: number[]): boolean {
    let neighboursEmpty = 0;
    if (index !== 0 && index % this.cols !== 0) {
      if (tmpPuzzle[index - 1] === 0) neighboursEmpty++;
    }
    if (index === 0 || index % (this.cols - 1) !== 0) {
      if (tmpPuzzle[index + 1] === 0) neighboursEmpty++;
    }
    if (index > this.cols) {
      if (tmpPuzzle[index - this.cols] === 0) neighboursEmpty++;
    }
    if (index < (this.rows - 1) * this.cols) {
      if (tmpPuzzle[index + this.cols] === 0) neighboursEmpty++;
    }
    return neighboursEmpty === 0;
  }

  private placeBrick(
    puzzle: Array<number>,
    currentBrick: Brick,
    row: number,
    col: number,
    direction: number
  ): void {
    const currentDirection = currentBrick.directions[direction];
    for (let itemRow = 0; itemRow < currentDirection.height; itemRow++) {
      for (let itemCol = 0; itemCol < currentDirection.width; itemCol++) {
        const puzzlePos = (row + itemRow) * this.cols + col + itemCol;
        const itemPos = itemRow * currentDirection.width + itemCol;
        puzzle[puzzlePos] += currentDirection.data[itemPos];
      }
    }
  }
}
