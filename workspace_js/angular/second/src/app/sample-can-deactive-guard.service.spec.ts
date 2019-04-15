import { TestBed } from '@angular/core/testing';

import { SampleCanDeactiveGuardService } from './sample-can-deactive-guard.service';

describe('SampleCanDeactiveGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleCanDeactiveGuardService = TestBed.get(SampleCanDeactiveGuardService);
    expect(service).toBeTruthy();
  });
});
