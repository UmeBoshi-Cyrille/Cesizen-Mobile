import { TestBed } from '@angular/core/testing';
import { UserCommandService } from './user-command.service';

describe('UserCommandService', () => {
  let service: UserCommandService;

  beforeEach(() => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [UserCommandService]
});
    service = TestBed.inject(UserCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
