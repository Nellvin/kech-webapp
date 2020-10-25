import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeremonsAudioComponent } from './seremons-audio.component';

describe('SeremonsAudioComponent', () => {
  let component: SeremonsAudioComponent;
  let fixture: ComponentFixture<SeremonsAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeremonsAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeremonsAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
