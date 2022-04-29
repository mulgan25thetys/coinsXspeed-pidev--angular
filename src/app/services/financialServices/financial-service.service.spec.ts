import { TestBed } from '@angular/core/testing';

import { FinancialServiceService } from './financial-service.service';

describe('FinancialServiceService', () => {
  let service: FinancialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
