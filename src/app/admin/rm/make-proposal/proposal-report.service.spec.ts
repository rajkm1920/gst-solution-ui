import { TestBed, inject } from '@angular/core/testing';

import { ProposalReportService } from './proposal-report.service';

describe('ProposalReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProposalReportService]
    });
  });

  it('should be created', inject([ProposalReportService], (service: ProposalReportService) => {
    expect(service).toBeTruthy();
  }));
});
