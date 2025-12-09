import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleView } from './puzzle-view';

describe('PuzzleView', () => {
  let component: PuzzleView;
  let fixture: ComponentFixture<PuzzleView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
