import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackGstReportsDefaultComponent } from './track-gst-reports-default.component';

describe('TrackGstReportsDefaultComponent', () => {
  let component: TrackGstReportsDefaultComponent;
  let fixture: ComponentFixture<TrackGstReportsDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackGstReportsDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackGstReportsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
