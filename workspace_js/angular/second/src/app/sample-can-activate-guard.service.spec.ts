import { TestBed } from '@angular/core/testing';

import { SampleCanActivateGuardService } from './sample-can-activate-guard.service';

describe('SampleCanActivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleCanActivateGuardService = TestBed.get(SampleCanActivateGuardService);
    expect(service).toBeTruthy();
  });
});
