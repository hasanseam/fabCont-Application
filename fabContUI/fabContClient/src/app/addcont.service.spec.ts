import { TestBed } from '@angular/core/testing';

import { AddcontService } from './addcont.service';

describe('AddcontService', () => {
  let service: AddcontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
