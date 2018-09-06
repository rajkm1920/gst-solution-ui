import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedInvoiceComponent } from './processed-invoice.component';

describe('ProcessedInvoiceComponent', () => {
  let component: ProcessedInvoiceComponent;
  let fixture: ComponentFixture<ProcessedInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
