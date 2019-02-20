/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OnboardResolverService } from './onboard-resolver.service';

describe('Service: OnboardResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnboardResolverService]
    });
  });

  it('should ...', inject([OnboardResolverService], (service: OnboardResolverService) => {
    expect(service).toBeTruthy();
  }));
});
