import { TestBed } from '@angular/core/testing';

import { TVShowsService } from './TVShows.service';

describe('TVShowsService', () => {
  let service: TVShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TVShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
