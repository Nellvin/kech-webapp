import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLiveComponent } from './youtube-live.component';

describe('YoutubeLiveComponent', () => {
  let component: YoutubeLiveComponent;
  let fixture: ComponentFixture<YoutubeLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
