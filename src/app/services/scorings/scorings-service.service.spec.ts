import { TestBed } from '@angular/core/testing';

import { ScoringsServiceService } from './scorings-service.service';

describe('ScoringsServiceService', () => {
  let service: ScoringsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoringsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
