import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonFormComponent } from './sermon-form.component';

describe('SermonFormComponent', () => {
  let component: SermonFormComponent;
  let fixture: ComponentFixture<SermonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
