import { TestBed } from '@angular/core/testing';

import { QuestionResponseServiceService } from './question-response-service.service';

describe('QuestionResponseServiceService', () => {
  let service: QuestionResponseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionResponseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
