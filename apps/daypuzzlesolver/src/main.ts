import express from 'express';

import { DayPuzzleSolver } from './daypuzzlesolver';
import { drawPuzzle } from './drawPuzzle';
import { view } from './view';
import { TemplateData } from '@htrsoft/daypuzzlesolver-models';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/api/daypuzzlesolver/date/:date', (req, res) => {
  const puzzle = new DayPuzzleSolver();
  const date = new Date(req.params.date);
  const result = puzzle.solve(date);
  if (result != null) {
    const displayData = view(date, puzzle.rows, puzzle.cols, result);
    res.send(displayData);
    drawPuzzle(puzzle.rows, puzzle.cols, displayData.viewData);
  }
});

app.get('/api/daypuzzlesolver/template', (req, res) => {
  const templateData: TemplateData = {
    rows: 8,
    cols: 7,
    templateData: [
      'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', '',
      'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec', '',
      '1', '2', '3', '4', '5', '6', '7',
      '8', '9', '10', '11', '12', '13', '14',
      '15', '16', '17', '18', '19', '20', '21',
      '22', '23', '24', '25', '26', '27', '28',
      '29', '30', '31', 'Man', 'Tir', 'Ons', 'Tor',
      '', '', '', '', 'Fre', 'Lør', 'Søn'
    ]
  }
  res.send(templateData);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
