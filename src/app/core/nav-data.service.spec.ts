import { TestBed, inject } from '@angular/core/testing';

import { NavDataService } from './nav-data.service';

describe('NavDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavDataService]
    });
  });

  it('should be created', inject([NavDataService], (service: NavDataService) => {
    expect(service).toBeTruthy();
  }));
});
