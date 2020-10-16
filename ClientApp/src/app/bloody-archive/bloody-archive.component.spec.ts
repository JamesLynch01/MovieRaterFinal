import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodyArchiveComponent } from './bloody-archive.component';

describe('BloodyArchiveComponent', () => {
  let component: BloodyArchiveComponent;
  let fixture: ComponentFixture<BloodyArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodyArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodyArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
