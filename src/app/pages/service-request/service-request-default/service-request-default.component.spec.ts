import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestDefaultComponent } from './service-request-default.component';

describe('ServiceRequestDefaultComponent', () => {
  let component: ServiceRequestDefaultComponent;
  let fixture: ComponentFixture<ServiceRequestDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRequestDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRequestDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
