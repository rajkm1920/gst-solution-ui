import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyGstDefaultComponent } from './apply-gst-default.component';

describe('ApplyGstDefaultComponent', () => {
  let component: ApplyGstDefaultComponent;
  let fixture: ComponentFixture<ApplyGstDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyGstDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyGstDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
