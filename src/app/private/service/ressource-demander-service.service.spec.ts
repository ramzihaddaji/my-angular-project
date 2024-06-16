import { TestBed } from '@angular/core/testing';

import { RessourceDemanderServiceService } from './ressource-demander-service.service';

describe('RessourceDemanderServiceService', () => {
  let service: RessourceDemanderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RessourceDemanderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
