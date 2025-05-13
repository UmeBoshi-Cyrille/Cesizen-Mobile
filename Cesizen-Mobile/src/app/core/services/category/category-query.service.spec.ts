import { TestBed } from '@angular/core/testing';
import { CategoryQueryService } from './category-query.service';

describe('CategoryQueryService', () => {
  let service: CategoryQueryService;

  beforeEach(() => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [CategoryQueryService],
    });
    service = TestBed.inject(CategoryQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
