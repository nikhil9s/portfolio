import { TestBed, inject } from '@angular/core/testing';

import { EducsService } from './educs.service';

describe('EducsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducsService]
    });
  });

  it('should be created', inject([EducsService], (service: EducsService) => {
    expect(service).toBeTruthy();
  }));
});
