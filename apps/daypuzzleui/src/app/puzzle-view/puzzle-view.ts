import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { DisplayData, TemplateData } from '@htrsoft/daypuzzlesolver-models';

const colors: {
  [key: string]: string;
} = {
  'A': "#5eaf4cff",
  'B': "#4c81afff",
  'C': "#af4c53ff",
  'D': "#afa34cff",
  'E': "#093c68ff",
  'F': "#626e78ff",
  'G': "#3d4b58ff",
  'H': "#3c2456ff",
  'I': "#4e323fff",
  'J': "#b8c2cbff",
  '1': "#435e31ff",
  '2': "#435e31ff",
  '3': "#435e31ff",
}

@Component({
  selector: 'app-puzzle-view',
  imports: [],
  templateUrl: './puzzle-view.html',
  styleUrl: './puzzle-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PuzzleView {
  readonly puzzleData = input<DisplayData|null>();
  readonly templateData = input<TemplateData|null>();

  protected get rows(): Array<number> {
    const length = this.templateData()?.rows;
    if (length) {
      return Array.from({ length }, (_, idx) => idx);
    }
    return new Array();
  }

  protected get cols(): Array<number> {
    const length = this.templateData()?.cols;
    if (length) {
      return Array.from({ length }, (_, idx) => idx);
    }
    return new Array();
  }

  protected getColor(row: number, col: number): string {
    const puzzleData = this.puzzleData();
    if (!puzzleData) return "#00000000";
    return colors[puzzleData.viewData[(row * puzzleData.cols) + col]];
  }

  protected getText(row: number, col: number): string {
    const templateData = this.templateData();
    const puzzleData = this.puzzleData();
    if (!templateData) return "";
    const templateValue = templateData.templateData[(row * templateData.cols) + col];
    if (!puzzleData) return templateValue;
    const value = puzzleData.viewData[(row * puzzleData.cols) + col];
    if (value === '1' || value === '2' || value === '3') return templateValue;
    return "";
  }
}
