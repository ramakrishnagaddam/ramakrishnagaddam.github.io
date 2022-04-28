import { TestBed } from '@angular/core/testing';

import { FascinateService } from './fascinate.service';

describe('FascinateService', () => {
  let service: FascinateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FascinateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
