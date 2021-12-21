import { TestBed } from '@angular/core/testing';

import { DefaultParamsInterceptor } from './default-params.interceptor';

describe('DefaultParamsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DefaultParamsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DefaultParamsInterceptor = TestBed.inject(DefaultParamsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
