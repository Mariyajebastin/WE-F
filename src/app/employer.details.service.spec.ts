import { TestBed } from '@angular/core/testing';

import { EmployerDetailsService } from './employer.details.service';

describe('EmployerDetailsService', () => {
  let service: EmployerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
