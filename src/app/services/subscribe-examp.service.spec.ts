import { TestBed } from '@angular/core/testing';

import { SubscribeExampService } from './subscribe-examp.service';

describe('SubscribeExampService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscribeExampService = TestBed.get(SubscribeExampService);
    expect(service).toBeTruthy();
  });
});
