import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePiecesComponent } from './movie-pieces.component';

describe('MoviePiecesComponent', () => {
  let component: MoviePiecesComponent;
  let fixture: ComponentFixture<MoviePiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
