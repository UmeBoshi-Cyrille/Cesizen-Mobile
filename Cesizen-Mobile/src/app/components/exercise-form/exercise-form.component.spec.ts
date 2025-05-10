import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseFormComponent } from './exercise-form.component';
import { provideHttpClient } from '@angular/common/http';
import { ExerciseCommandService } from '@services/exercise/exercise-command.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('ExerciseFormComponent', () => {
  let component: ExerciseFormComponent;
  let fixture: ComponentFixture<ExerciseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseFormComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),// Provide HttpClient
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
