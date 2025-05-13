import { TestBed } from '@angular/core/testing';
import { RefreshTokenService } from './refresh-token.service';

describe('RefreshTokenService', () => {
  let service: RefreshTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefreshTokenService]
});
    service = TestBed.inject(RefreshTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
