import { TestBed } from '@angular/core/testing';
import { ExercisesComponent } from './exercises.component';
import { ExerciseQueryService } from '@services/exercise/exercise-query.service';
import { provideRouter } from '@angular/router';

describe('ExercisesComponent', () => {
  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [ExercisesComponent],
      providers: [
        provideRouter([]),
        ExerciseQueryService, // Provide any services used by the component
      ],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExercisesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

