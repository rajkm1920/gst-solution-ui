import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackGstStatusDefaultComponent } from './track-gst-status-default.component';

describe('TrackGstStatusDefaultComponent', () => {
  let component: TrackGstStatusDefaultComponent;
  let fixture: ComponentFixture<TrackGstStatusDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackGstStatusDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackGstStatusDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
