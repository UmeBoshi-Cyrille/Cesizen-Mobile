import { TestBed } from '@angular/core/testing';
import { ExerciseCommandService } from './exercise-command.service';


describe('ExerciseCommandService', () => {
  let service: ExerciseCommandService;

  beforeEach(() => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [ExerciseCommandService]
    });
    service = TestBed.inject(ExerciseCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
