import { TestBed } from '@angular/core/testing';
import { ArticleQueryService } from './article-query.service';

describe('ArticleQueryServicesService', () => {
  let service: ArticleQueryService;

  beforeEach(() => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [ArticleQueryService],
});
    service = TestBed.inject(ArticleQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
