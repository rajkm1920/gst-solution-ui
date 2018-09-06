import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstTrackComponent } from './gst-track.component';

describe('GstTrackComponent', () => {
  let component: GstTrackComponent;
  let fixture: ComponentFixture<GstTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
