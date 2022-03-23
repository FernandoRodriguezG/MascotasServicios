import { TestBed } from '@angular/core/testing';

import { SavePetsService } from './save-pets.service';

describe('SavePetsService', () => {
  let service: SavePetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavePetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
