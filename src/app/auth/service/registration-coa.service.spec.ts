import { TestBed } from '@angular/core/testing';

import { RegistrationCOAService } from './registration-coa.service';

describe('RegistrationCOAService', () => {
  let service: RegistrationCOAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationCOAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
