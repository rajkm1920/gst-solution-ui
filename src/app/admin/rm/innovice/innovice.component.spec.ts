import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnoviceComponent } from './innovice.component';

describe('InnoviceComponent', () => {
  let component: InnoviceComponent;
  let fixture: ComponentFixture<InnoviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnoviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnoviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
