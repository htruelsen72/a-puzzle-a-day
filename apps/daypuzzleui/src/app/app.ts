import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { DisplayData, TemplateData } from '@htrsoft/daypuzzlesolver-models';
import { PuzzleView } from './puzzle-view/puzzle-view';

@Component({
  imports: [
    PuzzleView,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private httpClient = inject(HttpClient);
  form: FormGroup;
  isGenerating = false;
  startTime = 0;
  solutionTime = 0;

  protected puzzleResult: DisplayData | null = null;
  protected templateData: TemplateData | null = null;
  timer: number | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: [new Date()],
    });
    this.httpClient
      .get<TemplateData>(`/api/daypuzzlesolver/template`)
      .subscribe((value: TemplateData) => {
        this.templateData = value;
      });
    this.form.get('date')!.valueChanges.subscribe(value => {
      this.puzzleResult = null;
    });
  }

  generate() {
    console.log(this.form.value.date);
    this.puzzleResult = null;
    this.isGenerating = true;
    this.startTime = Date.now();
    this.timer = setInterval(() => {
      this.solutionTime = Date.now() - this.startTime;
    }, 100);
    this.httpClient
      .get<DisplayData>(`/api/daypuzzlesolver/date/${this.form.value.date}`)
      .subscribe({
        next: (value: DisplayData) => {
          const stopTime = Date.now();
          this.solutionTime = stopTime - this.startTime;
          this.puzzleResult = value;
        },
        complete: () => {
          this.isGenerating = false;
          if (this.timer) {
            clearInterval(this.timer);
          }
          this.timer = null;
        }
      });
  }
}
