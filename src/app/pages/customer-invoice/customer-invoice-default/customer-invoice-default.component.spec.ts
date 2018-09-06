import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoiceDefaultComponent } from './customer-invoice-default.component';

describe('CustomerInvoiceDefaultComponent', () => {
  let component: CustomerInvoiceDefaultComponent;
  let fixture: ComponentFixture<CustomerInvoiceDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInvoiceDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvoiceDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
