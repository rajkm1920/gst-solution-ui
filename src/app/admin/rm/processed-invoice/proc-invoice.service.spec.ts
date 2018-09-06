import { TestBed, inject } from '@angular/core/testing';

import { ProcInvoiceService } from './proc-invoice.service';

describe('ProcInvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcInvoiceService]
    });
  });

  it('should be created', inject([ProcInvoiceService], (service: ProcInvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
