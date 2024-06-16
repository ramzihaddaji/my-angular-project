import { TestBed } from '@angular/core/testing';

import { UserCOAService } from './user-coa.service';

describe('UserCOAService', () => {
  let service: UserCOAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCOAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
