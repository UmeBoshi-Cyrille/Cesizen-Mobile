import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseComponent } from './exercise.component';
import { provideRouter } from '@angular/router';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [ExerciseComponent],
      providers: [
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
