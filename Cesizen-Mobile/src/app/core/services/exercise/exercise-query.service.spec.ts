import { TestBed } from '@angular/core/testing';
import { ExerciseQueryService } from './exercise-query.service';


describe('ExerciseQueryService', () => {
  let service: ExerciseQueryService;

  beforeEach(() => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [ExerciseQueryService]
    });
    service = TestBed.inject(ExerciseQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
