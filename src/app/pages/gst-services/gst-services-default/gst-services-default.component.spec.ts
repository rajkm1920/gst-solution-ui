import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstServicesDefaultComponent } from './gst-services-default.component';

describe('GstServicesDefaultComponent', () => {
  let component: GstServicesDefaultComponent;
  let fixture: ComponentFixture<GstServicesDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstServicesDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstServicesDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
