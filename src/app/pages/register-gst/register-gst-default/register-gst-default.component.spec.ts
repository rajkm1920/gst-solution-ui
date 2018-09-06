import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGstDefaultComponent } from './register-gst-default.component';

describe('RegisterGstDefaultComponent', () => {
  let component: RegisterGstDefaultComponent;
  let fixture: ComponentFixture<RegisterGstDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGstDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGstDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
