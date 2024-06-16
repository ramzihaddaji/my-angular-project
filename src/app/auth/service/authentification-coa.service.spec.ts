import { TestBed } from '@angular/core/testing';

import { AuthentificationCOAService } from './authentification-coa.service';

describe('AuthentificationCOAService', () => {
  let service: AuthentificationCOAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationCOAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
