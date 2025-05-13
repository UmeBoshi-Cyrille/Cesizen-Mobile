import { TestBed } from '@angular/core/testing';
import { RegistrationService } from './registration.service';

describe('RegistrationQueryService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [RegistrationService],
    });
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
