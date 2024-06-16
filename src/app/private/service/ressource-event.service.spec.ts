import { TestBed } from '@angular/core/testing';

import { RessourceEventService } from './ressource-event.service';

describe('RessourceEventService', () => {
  let service: RessourceEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RessourceEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
