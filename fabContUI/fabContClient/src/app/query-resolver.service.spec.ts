import { TestBed } from '@angular/core/testing';

import { QueryResolverService } from './query-resolver.service';

describe('QueryResolverService', () => {
  let service: QueryResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
