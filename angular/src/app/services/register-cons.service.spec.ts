import { TestBed } from '@angular/core/testing';

import { RegisterConsService } from './register-cons.service';

describe('RegisterConsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterConsService = TestBed.get(RegisterConsService);
    expect(service).toBeTruthy();
  });
});
