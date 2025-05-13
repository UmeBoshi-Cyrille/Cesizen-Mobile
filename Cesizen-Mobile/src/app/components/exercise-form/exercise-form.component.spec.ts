import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseFormComponent } from './exercise-form.component';
import { ExerciseCommandService } from '@services/exercise/exercise-command.service';
import { provideRouter } from '@angular/router';

describe('ExerciseFormComponent', () => {
  let component: ExerciseFormComponent;
  let fixture: ComponentFixture<ExerciseFormComponent>;

  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [ExerciseFormComponent],
      providers: [
        provideRouter([]),
        ExerciseCommandService, // Provide any services used by the component
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
