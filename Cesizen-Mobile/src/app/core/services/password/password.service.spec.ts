import { TestBed } from '@angular/core/testing';
import { PasswordService } from './password.service';

describe('ForgetPasswordService', () => {
  let service: PasswordService;

  beforeEach(() => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [PasswordService]
});
    service = TestBed.inject(PasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
