import { TestBed } from '@angular/core/testing';

import { ItnewsService } from './itnews.service';

describe('ItnewsService', () => {
  let service: ItnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
