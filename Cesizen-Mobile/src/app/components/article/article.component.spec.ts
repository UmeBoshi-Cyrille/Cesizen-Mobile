import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { ArticleQueryService } from '@services/article/article-query.service';
import { provideRouter } from '@angular/router';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
      providers: [
        provideRouter([]),
        ArticleQueryService, // Provide any services used by the component
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
