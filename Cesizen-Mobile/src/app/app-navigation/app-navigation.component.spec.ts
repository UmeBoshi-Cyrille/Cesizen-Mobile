import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppNavigationComponent } from './app-navigation.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('AppNavigationComponent', () => {
  let component: AppNavigationComponent;
  let fixture: ComponentFixture<AppNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppNavigationComponent // Import standalone component directly
      ],
      providers: [
        provideAnimations() // Required for Angular Material animations
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
