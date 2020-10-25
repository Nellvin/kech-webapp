import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeremonsComponent } from './seremons.component';

describe('SeremonsComponent', () => {
  let component: SeremonsComponent;
  let fixture: ComponentFixture<SeremonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeremonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeremonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
