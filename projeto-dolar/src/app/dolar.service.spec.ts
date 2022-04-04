import { TestBed } from '@angular/core/testing';

import { DolarService } from './dolar.service';

describe('DolarService', () => {
  let service: DolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
