import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShowRoomComponent } from './movie-show-room.component';

describe('MovieShowRoomComponent', () => {
  let component: MovieShowRoomComponent;
  let fixture: ComponentFixture<MovieShowRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieShowRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieShowRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
