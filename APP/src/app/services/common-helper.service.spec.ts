import { TestBed, inject } from '@angular/core/testing';

import { CommonHelperService } from './common-helper.service';

describe('CommonHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonHelperService]
    });
  });

  it('should be created', inject([CommonHelperService], (service: CommonHelperService) => {
    expect(service).toBeTruthy();
  }));
});
