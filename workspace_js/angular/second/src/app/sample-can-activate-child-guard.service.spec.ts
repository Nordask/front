import { TestBed } from '@angular/core/testing';

import { SampleCanActivateChildGuardService } from './sample-can-activate-child-guard.service';

describe('SampleCanActivateChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleCanActivateChildGuardService = TestBed.get(SampleCanActivateChildGuardService);
    expect(service).toBeTruthy();
  });
});
