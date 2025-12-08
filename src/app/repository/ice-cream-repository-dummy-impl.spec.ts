import { TestBed } from '@angular/core/testing';

import { IceCreamRepositoryDummyImpl } from './ice-cream-repository-dummy-impl';

describe('IceCreamRepositoryDummyImpl', () => {
  let service: IceCreamRepositoryDummyImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IceCreamRepositoryDummyImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
