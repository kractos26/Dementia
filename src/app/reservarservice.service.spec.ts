import { TestBed } from '@angular/core/testing';

import { ReservarserviceService } from './reservarservice.service';

describe('ReservarserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservarserviceService = TestBed.get(ReservarserviceService);
    expect(service).toBeTruthy();
  });
});
