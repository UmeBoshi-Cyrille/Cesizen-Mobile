import { TestBed } from '@angular/core/testing';
import { UserQueryService } from './user-query.service';


describe('UserQueryService', () => {
  let service: UserQueryService;

  beforeEach(() => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [UserQueryService]
});
    service = TestBed.inject(UserQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
