import { TestBed } from '@angular/core/testing';

import { NoFinancialServicesService } from './no-financial-services.service';

describe('NoFinancialServicesService', () => {
  let service: NoFinancialServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoFinancialServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
