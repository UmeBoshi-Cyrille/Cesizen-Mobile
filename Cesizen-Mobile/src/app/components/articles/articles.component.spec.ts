import { TestBed } from '@angular/core/testing';
import { ArticlesComponent } from './articles.component';
import { ArticleQueryService } from '@services/article/article-query.service';


describe('ArticlesComponent', () => {
  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [ArticlesComponent],
      providers: [ArticleQueryService],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


