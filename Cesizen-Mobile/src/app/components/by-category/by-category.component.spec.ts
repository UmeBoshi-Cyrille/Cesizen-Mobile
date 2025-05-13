import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByCategoryComponent } from './by-category.component';
import { provideRouter } from '@angular/router';

describe('ByCategoryComponent', () => {
  let component: ByCategoryComponent;
  let fixture: ComponentFixture<ByCategoryComponent>;

  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [ByCategoryComponent],
      providers: [
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
