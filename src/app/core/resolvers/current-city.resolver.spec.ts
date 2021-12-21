import { TestBed } from '@angular/core/testing';

import { CurrentCityResolver } from './current-city.resolver';

describe('CurrentCityResolver', () => {
  let resolver: CurrentCityResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CurrentCityResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
