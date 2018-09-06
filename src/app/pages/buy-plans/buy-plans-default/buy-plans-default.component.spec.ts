import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPlansDefaultComponent } from './buy-plans-default.component';

describe('BuyPlansDefaultComponent', () => {
  let component: BuyPlansDefaultComponent;
  let fixture: ComponentFixture<BuyPlansDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPlansDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPlansDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
